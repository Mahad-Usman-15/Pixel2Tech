import PageBanner from "../components/PageBanner";
import BlogSection from "../components/BlogSection";

export const metadata = {
  title: "Blog",
  description:
    "Insights on branding, marketing, websites, and AI to help founders build stronger businesses. Expert tips and trends from Pixel2Tech.",
  keywords: [
    "digital marketing blog",
    "web development tips",
    "branding insights",
    "AI trends",
    "UX design blog",
  ],
  openGraph: {
    title: "Blog | Pixel2Tech",
    description:
      "Branding, marketing, websites, and AI insights to help founders build stronger businesses.",
    url: "/blogs",
  },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        heading="Blog & Insights"
        subheading="Branding, marketing, websites, and AI insights to help founders build stronger businesses."
        backgroundImage="/images/about.jpg"
      />
      <BlogSection />
    </main>
  );
}
