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
    image: "https://picsum.photos/800/600?random=1",
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
    image: "https://picsum.photos/800/600?random=2",
    tags: ["React", "TypeScript", "Framer Motion"],
    link: "https://example.com/portfolio",
    features: [
      "Responsive design",
      "Dark mode support",
      "Smooth page transitions",
      "Contact form with validation",
    ],
    challenges: "Creating smooth animations while maintaining performance was challenging. Used Framer Motion for optimized animations and implemented lazy loading for images."
  },
  {
    title: "Task Management App",
    slug: "task-management-app",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://example.com/taskapp",
    features: [
      "Real-time collaboration",
      "Drag and drop interface",
      "Team management",
      "Progress tracking",
      "File attachments",
    ],
    challenges: "Implementing real-time synchronization across multiple users while maintaining data consistency was the primary challenge. Solved using Socket.io with proper conflict resolution strategies."
  },
  {
    title: "Weather Dashboard",
    slug: "weather-dashboard",
    description: "A beautiful weather application with detailed forecasts, interactive maps, and location-based weather alerts.",
    image: "https://picsum.photos/800/600?random=4",
    tags: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
    link: "https://example.com/weather",
    features: [
      "7-day weather forecast",
      "Interactive weather maps",
      "Location-based alerts",
      "Progressive Web App",
      "Offline functionality",
    ],
    challenges: "Creating an intuitive interface for complex weather data visualization while ensuring fast performance across different devices and network conditions."
  },
  {
    title: "AI Chat Assistant",
    slug: "ai-chat-assistant",
    description: "An intelligent chat assistant powered by AI with context awareness, conversation memory, and multi-language support.",
    image: "https://picsum.photos/800/600?random=5",
    tags: ["Python", "FastAPI", "OpenAI", "Redis", "WebSocket"],
    link: "https://example.com/chatbot",
    features: [
      "Natural language processing",
      "Context-aware responses",
      "Conversation memory",
      "Multi-language support",
      "Real-time messaging",
    ],
    challenges: "Maintaining conversation context across sessions while ensuring response relevance and handling rate limiting from AI services efficiently."
  },
  {
    title: "Fitness Tracking App",
    slug: "fitness-tracking-app",
    description: "A comprehensive fitness tracking application with workout planning, progress analytics, and social features for motivation.",
    image: "https://picsum.photos/800/600?random=6",
    tags: ["React Native", "Firebase", "HealthKit", "Analytics"],
    link: "https://example.com/fitness",
    features: [
      "Workout planning and tracking",
      "Progress analytics",
      "Social features",
      "Health data integration",
      "Custom workout routines",
    ],
    challenges: "Integrating with various health platforms while maintaining user privacy and providing meaningful insights from complex health data."
  }
];
