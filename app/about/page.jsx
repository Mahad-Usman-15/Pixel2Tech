import PageBanner from "../components/PageBanner";
import FAQSection from "../components/FAQSection";
import Image from "next/image";
import about from "../../public/images/about.jpg";
import AboutSection from "../components/aboutSection";
import CounterSection from "../components/CounterSection";
import Testimonials from "../components/testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/process";
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
