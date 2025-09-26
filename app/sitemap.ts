import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://boostlab.example.com";
  const now = new Date().toISOString();

  const routes = ["", "/services", "/pricing", "/about", "/contact"].map(
    (path) => ({
      url: base + path,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  return routes;
}