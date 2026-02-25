import HeroSection from "./components/HeroSection";
import Process from "./components/process";
import Testimonials from "./components/testimonials";
import CTASection from "./components/ctasection";
import Services from "./components/services";
import Contact from "./components/contact";
import BrandTicker from "./components/BrandTicker";
import WorkMarquee from "./components/WorkMarquee";
import TeamSection from "./components/TeamSection";
import BlogSection from "./components/BlogSection";
import AboutSection from "./components/aboutSection";

export const metadata = {
  title: "Home",
  description:
    "Transform your brand with Pixel2Tech - AI-powered creative agency offering web development, branding, UI/UX design, and digital marketing services.",
  openGraph: {
    title: "Pixel2Tech | Home",
    description:
      "Transform your brand with smart strategy, modern design, and web development.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <BrandTicker />
      <WorkMarquee />
      <Process />
      <Testimonials />
      <Services />
      <TeamSection />
      <BlogSection />
      <Contact />
      <CTASection />
    </main>
  );
}
