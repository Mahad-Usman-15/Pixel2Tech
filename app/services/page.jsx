import PageBanner from "../components/PageBanner";
import Services from "../components/services";
import FAQSection from "../components/FAQSection";
import faqsServices from "../data/faqsServices";

export const metadata = {
  title: "Services",
  description:
    "Complete digital solutions under one roof. Branding, web design, UI/UX, social media marketing, and AI solutions. One team, all services, real results.",
  keywords: [
    "web development services",
    "branding services",
    "UI UX design",
    "digital marketing",
    "AI solutions",
    "social media marketing",
  ],
  openGraph: {
    title: "Our Services | Pixel2Tech",
    description:
      "At Pixel2Tech, we provide complete creative and digital solutions under one roof. From branding to marketing and web development.",
    url: "/services",
  },
};

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
