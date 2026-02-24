import brandingImage from '../../public/images/Branding & Identity.jpg';
import websiteImage from '../../public/images/website.jpg';
import uiuxImage from '../../public/images/uiux.jpg';
import socialImage from '../../public/images/social.jpg';
import motionImage from '../../public/images/ecommerce.jpg';
import aiImage from '../../public/images/ai.jpg';

export const workCategories = [
  {
    id: 1,
    title: "Branding & Identity",
    image: brandingImage,
    slug: "branding-identity",
    subcategories: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Strategy",
      "Brand Refresh",
    ],
  },
  {
    id: 2,
    title: "Website Design & Development",
    image: websiteImage,
    slug: "website-design-development",
    subcategories: [
      "Custom Websites",
      "E-commerce Sites",
      "Landing Pages",
      "Web Applications",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    title: "UI UX Design",
    image: uiuxImage,
    slug: "ui-ux-design",
    subcategories: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
      "Usability Testing",
    ],
  },
  {
    id: 4,
    title: "Social Media & Content",
    image: socialImage,
    slug: "social-media-content",
    subcategories: [
      "Content Strategy",
      "Social Media Design",
      "Brand Content",
      "Visual Storytelling",
      "Engagement Campaigns",
    ],
  },
  {
    id: 5,
    title: "Motion & Video",
    image: motionImage,
    slug: "motion-video",
    subcategories: [
      "Explainer Videos",
      "Product Demos",
      "Brand Animations",
      "Social Media Reels",
      "Motion Graphics",
    ],
  },
  {
    id: 6,
    title: "AI Solutions",
    image: aiImage,
    slug: "ai-solutions",
    subcategories: [
      "AI Integration",
      "Chatbot Development",
      "Process Automation",
      "AI-Powered Analytics",
      "Custom AI Tools",
    ],
  },
];

export default workCategories;
