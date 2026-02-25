import PageBanner from "../components/PageBanner";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pixel2Tech. Ready to transform your brand? Contact us today and let's create something amazing together.",
  keywords: [
    "contact Pixel2Tech",
    "get in touch",
    "digital agency contact",
    "web development inquiry",
  ],
  openGraph: {
    title: "Contact Us | Pixel2Tech",
    description:
      "Ready to transform your brand? Get in touch with us today and let's create something amazing.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        heading="Let's Work Together"
        subheading="Ready to transform your brand? Get in touch with us today and let's create something amazing."
        backgroundImage="/images/about.jpg"
      />
      <ContactSection />
    </main>
  );
}
