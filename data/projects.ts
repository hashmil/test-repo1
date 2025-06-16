export interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  features?: string[];
  challenges?: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe integration, featuring a modern design and seamless user experience.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    link: "https://example.com/ecommerce",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart functionality",
      "Secure payment processing with Stripe",
      "Order management system",
    ],
    challenges: "One of the main challenges was implementing real-time inventory management while handling concurrent transactions. This was solved by implementing optimistic locking and a queue system for processing orders."
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description: "A responsive portfolio website with dark mode support and smooth animations.",
    image: "/images/projects/portfolio.jpg",
    tags: ["React", "TypeScript", "Framer Motion"],
    link: "https://example.com/portfolio",
    features: [
      "Responsive design",
      "Dark mode support",
      "Smooth page transitions",
      "Contact form with validation",
    ],
    challenges: "Creating smooth animations while maintaining performance was challenging. Used Framer Motion for optimized animations and implemented lazy loading for images."
  }
];
