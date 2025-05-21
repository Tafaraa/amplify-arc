// Shared data models and content for Amplify ARC

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}



export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  quote: string;
  avatar?: string;
  logo?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
}

// Services data
export const SERVICES: Service[] = [
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Premium mobile experiences crafted with precision. We build native and cross-platform apps that elevate your brand and engage your users.',
    icon: 'mobile-alt'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Cutting-edge web solutions that combine stunning design with powerful functionality. From corporate sites to complex web applications.',
    icon: 'laptop-code'
  },
  {
    id: 'ui-design',
    title: 'UI/UX Design',
    description: 'User-centered design that creates memorable digital experiences. We transform complex problems into intuitive interfaces.',
    icon: 'pencil-ruler'
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Strategic brand development that communicates your unique value. We craft identities that resonate with your target audience.',
    icon: 'paint-brush'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Ongoing technical support and maintenance to ensure your digital products remain secure, up-to-date, and performing optimally.',
    icon: 'tools'
  },
  {
    id: 'consulting',
    title: 'Digital Consulting',
    description: 'Expert guidance on digital strategy, technology selection, and innovation roadmaps to future-proof your business.',
    icon: 'lightbulb'
  }
];



// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sarah Johnson',
    company: 'Innovate Tech',
    quote: 'Amplify ARC transformed our digital presence with a stunning website and mobile app that perfectly captures our brand essence. Their attention to detail and technical expertise is unmatched.',
    avatar: 'sarah-johnson.jpg'
  },
  {
    id: '2',
    clientName: 'Michael Chen',
    company: 'Quantum Solutions',
    quote: 'Working with Amplify ARC was a game-changer for our startup. Their strategic approach to UX design resulted in a 40% increase in user engagement within the first month.',
    avatar: 'michael-chen.jpg'
  },
  {
    id: '3',
    clientName: 'Emma Rodriguez',
    company: 'Elevate Retail',
    quote: 'The team at Amplify ARC delivered our e-commerce platform ahead of schedule and exceeded all our expectations. Their ongoing support has been invaluable to our growth.',
    avatar: 'emma-rodriguez.jpg'
  },
  {
    id: '4',
    clientName: 'David Park',
    company: 'Horizon Finance',
    quote: "Amplify ARC's expertise in financial app development helped us create a secure, intuitive platform that our clients love. Their technical knowledge and creative solutions are exceptional.",
    avatar: 'david-park.jpg'
  }
];

// Portfolio items
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Horizon Finance Dashboard',
    description: 'A comprehensive financial management platform with real-time data visualization and secure transaction processing.',
    imageUrl: 'horizon-finance.jpg',
    category: 'Web Development',
    link: '#'
  },
  {
    id: '2',
    title: 'EcoTrack Mobile App',
    description: 'An award-winning sustainability app that helps users track and reduce their carbon footprint through gamification.',
    imageUrl: 'ecotrack-app.jpg',
    category: 'App Development',
    link: '#'
  },
  {
    id: '3',
    title: 'Lumina Brand Identity',
    description: 'Complete brand overhaul for a luxury skincare line, including digital and print assets that elevated market positioning.',
    imageUrl: 'lumina-brand.jpg',
    category: 'Branding',
    link: '#'
  },
  {
    id: '4',
    title: 'ConnectHub Platform',
    description: 'A social networking platform for professionals with advanced matching algorithms and seamless communication tools.',
    imageUrl: 'connecthub.jpg',
    category: 'Web & App Development',
    link: '#'
  }
];
