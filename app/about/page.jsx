import PageBanner from "../components/PageBanner";
import FAQSection from "../components/FAQSection";
import AboutSection from "../components/aboutSection";
import CounterSection from "../components/CounterSection";
import Testimonials from "../components/testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/process";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Pixel2Tech - Pakistan's first fully remote AI-powered creative agency. We help brands grow with smart strategy, modern design, marketing, and web development.",
  keywords: [
    "about Pixel2Tech",
    "digital agency Pakistan",
    "AI creative agency",
    "remote agency",
  ],
  openGraph: {
    title: "About Pixel2Tech | AI-Powered Digital Agency",
    description:
      "Pakistan's first fully remote AI-powered creative agency. Built in Pakistan, working with clients worldwide.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        heading="Pakistan's First Fully Remote AI Powered Creative Agency"
        subheading="We help brands grow with smart strategy, modern design, marketing, and web development. Built in Pakistan. Working with clients worldwide."
        backgroundImage="/images/about.jpg"
      />
      <AboutSection />
      <WhyChooseUs />
      <CounterSection />
      <Process />
      <Testimonials />
      <FAQSection />
    </main>
  );
}
