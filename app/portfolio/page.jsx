import PageBanner from "../components/PageBanner";
import PortfolioTabs from "../components/PortfolioTabs";
import WorkMarquee from "../components/WorkMarquee";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore our work - brands, websites, and digital experiences that help businesses grow, attract better clients, and increase sales.",
  keywords: [
    "portfolio",
    "our work",
    "web design portfolio",
    "branding projects",
    "case studies",
  ],
  openGraph: {
    title: "Our Portfolio | Pixel2Tech",
    description:
      "We create brands, websites, and digital experiences that help businesses grow, attract better clients, and increase sales.",
    url: "/portfolio",
  },
};

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
