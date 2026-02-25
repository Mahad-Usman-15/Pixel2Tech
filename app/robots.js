export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/static/"],
    },
    sitemap: "https://pixel2tech.vercel.app/sitemap.xml",
  };
}
