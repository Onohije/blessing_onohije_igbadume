import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter (per server instance). Good enough to blunt
// naive bots; for real production traffic swap this for a durable store
// (Upstash Redis, etc.) — see README "Contact form" section.
const submissions = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, company } = body as Record<string, unknown>;

  // Honeypot: real users never fill this hidden field.
  if (typeof company === "string" && company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim().length < 2 ||
    message.trim().length < 10 ||
    !isValidEmail(email)
  ) {
    return NextResponse.json({ error: "Please fill in every field correctly." }, { status: 422 });
  }

  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  // NOTE: this route currently logs the message server-side. To actually
  // deliver messages to an inbox, wire in a transactional email provider
  // (Resend, Postmark, SES) here using an API key stored in an environment
  // variable — never commit credentials to the repo. See README "Contact form".
  console.log("New contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
