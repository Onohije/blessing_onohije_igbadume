import { describe, expect, it } from "vitest";
import { site, skills, experience, caseStudies } from "@/content/profile";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

describe("content model integrity", () => {
  it("has required site fields", () => {
    expect(site.name).toBeTruthy();
    expect(site.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(site.url.startsWith("https://")).toBe(true);
  });

  it("has at least one skill category with items", () => {
    expect(skills.length).toBeGreaterThan(0);
    skills.forEach((group) => {
      expect(group.items.length).toBeGreaterThan(0);
    });
  });

  it("has experience entries with achievements", () => {
    expect(experience.length).toBeGreaterThan(0);
    experience.forEach((job) => {
      expect(job.achievement).toBeTruthy();
      expect(job.highlights.length).toBeGreaterThan(0);
    });
  });

  it("has unique, non-empty case study slugs", () => {
    const slugs = caseStudies.map((cs) => cs.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((slug) => expect(slug).toMatch(/^[a-z0-9-]+$/));
  });
});

describe("blog utilities", () => {
  it("lists posts sorted by date descending", () => {
    const posts = getAllPosts();
    for (let i = 1; i < posts.length; i++) {
      expect(posts[i - 1].date >= posts[i].date).toBe(true);
    }
  });

  it("returns undefined for an unknown slug", () => {
    expect(getPostBySlug("does-not-exist")).toBeUndefined();
  });

  it("returns a post for a known slug", () => {
    const posts = getAllPosts();
    if (posts.length > 0) {
      expect(getPostBySlug(posts[0].slug)?.slug).toBe(posts[0].slug);
    }
  });
});
