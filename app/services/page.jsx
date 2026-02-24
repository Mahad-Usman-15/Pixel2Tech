import PageBanner from "../components/PageBanner";
import Services from "../components/services";
import FAQSection from "../components/FAQSection";
import faqsServices from "../data/faqsServices";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        heading="Everything You Need to Build, Grow and Scale"
        subheading="At Pixel2Tech, we provide complete creative and digital solutions under one roof. From branding to marketing and web development, we help businesses grow faster and look more professional. One team. All services. Real results."
        backgroundImage="/images/about.jpg"
      />
      <Services />
      <FAQSection faqsData={faqsServices} />
    </main>
  );
}
