import PageBanner from "../components/PageBanner";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        heading="Let's work together"
        subheading="Ready to transform your brand? Get in touch with us today and let's create something amazing."
        backgroundImage="/images/about.jpg"
      />
      <ContactSection />
    </main>
  );
}
