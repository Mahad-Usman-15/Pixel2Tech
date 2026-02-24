export const portfolioCategories = [
  { id: 'all', label: 'All Categories' },
  { id: 'website', label: 'Website Development' },
  { id: 'uiux', label: 'UI/UX Design' },
  { id: 'ai', label: 'AI Integration' },
  { id: 'graphics', label: 'Graphics Design' },
];

export const portfolioProjects = [
  // Website Development Projects
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    category: "website",
    categoryLabel: "Website Development",
    image: "/images/portfolio-1.jpg",
  },
  {
    id: 2,
    title: "Corporate Website",
    description: "Modern responsive website for a tech startup",
    category: "website",
    categoryLabel: "Website Development",
    image: "/images/portfolio-5.jpg",
  },
  {
    id: 3,
    title: "Real Estate Portal",
    description: "Property listing and management platform",
    category: "website",
    categoryLabel: "Website Development",
    image: "/images/website.jpg",
  },
  
  // UI/UX Design Projects
  {
    id: 4,
    title: "Mobile Banking App",
    description: "Intuitive UI design for a fintech application",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    image: "/images/portfolio-2.jpg",
  },
  {
    id: 5,
    title: "Dashboard Redesign",
    description: "Analytics dashboard with improved user experience",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    image: "/images/uiux.jpg",
  },
  {
    id: 6,
    title: "Healthcare App",
    description: "Patient management system interface design",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    image: "/images/portfolio-1.jpg",
  },
  
  // AI Integration Projects
  {
    id: 7,
    title: "Chatbot Solution",
    description: "AI-powered customer support chatbot",
    category: "ai",
    categoryLabel: "AI Integration",
    image: "/images/portfolio-3.jpg",
  },
  {
    id: 8,
    title: "Image Recognition System",
    description: "Automated product classification using AI",
    category: "ai",
    categoryLabel: "AI Integration",
    image: "/images/ai.jpg",
  },
  {
    id: 9,
    title: "Predictive Analytics",
    description: "Sales forecasting tool with machine learning",
    category: "ai",
    categoryLabel: "AI Integration",
    image: "/images/portfolio-5.jpg",
  },
  
  // Graphics Design Projects
  {
    id: 10,
    title: "Brand Identity Kit",
    description: "Complete branding package for a startup",
    category: "graphics",
    categoryLabel: "Graphics Design",
    image: "/images/portfolio-4.jpg",
  },
  {
    id: 11,
    title: "Social Media Kit",
    description: "Template designs for social media campaigns",
    category: "graphics",
    categoryLabel: "Graphics Design",
    image: "/images/portfolio-6.jpg",
  },
  {
    id: 12,
    title: "Marketing Materials",
    description: "Brochures, flyers, and promotional content",
    category: "graphics",
    categoryLabel: "Graphics Design",
    image: "/images/Branding & Identity.jpg",
  },
];

export default { portfolioCategories, portfolioProjects };
