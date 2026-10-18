import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://cold-proof.vercel.app/" },
    { url: "https://cold-proof.vercel.app/brand-book.html" },
  ];
}
