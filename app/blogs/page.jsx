import PageBanner from "../components/PageBanner";
import BlogSection from "../components/BlogSection";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        heading="Blogs"
        subheading="Branding, marketing, websites, and AI insights to help founders build stronger businesses."
        backgroundImage="/images/about.jpg"
      />
      <BlogSection />
    </main>
  );
}
