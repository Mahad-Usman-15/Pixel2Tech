export default function sitemap() {
  const baseUrl = "https://pixel2tech.vercel.app";
  const currentYear = new Date().getFullYear();

  const staticPages = [
    {
      url: "",
      lastModified: new Date(currentYear, 1, 26),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "/about",
      lastModified: new Date(currentYear, 1, 26),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/services",
      lastModified: new Date(currentYear, 1, 26),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "/portfolio",
      lastModified: new Date(currentYear, 1, 26),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "/blogs",
      lastModified: new Date(currentYear, 1, 26),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "/contact",
      lastModified: new Date(currentYear, 1, 26),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return staticPages.map(({ url, ...rest }) => ({
    url: `${baseUrl}${url}`,
    ...rest,
  }));
}
