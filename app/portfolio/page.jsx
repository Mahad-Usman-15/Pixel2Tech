import PageBanner from "../components/PageBanner";
import PortfolioTabs from "../components/PortfolioTabs";
import WorkMarquee from "../components/WorkMarquee";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        heading="Our Work Speaks for Itself"
        subheading="We create brands, websites, and digital experiences that help businesses grow, attract better clients, and increase sales."
        backgroundImage="/images/about.jpg"
      />
      <PortfolioTabs />
      <WorkMarquee />
    </main>
  );
}
