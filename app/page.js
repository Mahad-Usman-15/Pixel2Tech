import HeroSection from "./components/HeroSection";
import Process from "./components/process";
import Testimonials from "./components/testimonials";
import CTASection from "./components/ctasection";
import Services from "./components/services"
import Contact from "./components/contact"
import BrandTicker from "./components/BrandTicker"
import WorkMarquee from "./components/WorkMarquee"
import TeamSection from "./components/TeamSection"
import BlogSection from "./components/BlogSection"
import AboutSection from "./components/aboutSection"

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
