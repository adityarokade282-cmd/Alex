import {
  Briefcase,
  Bot,
  Layout,
  User,
  Gauge,
  ShoppingCart,
  RefreshCw,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Briefcase,
    title: 'Business Websites',
    description: 'Professional websites that establish your brand presence and convert visitors into customers.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Websites',
    description: 'Smart websites with AI chatbots, content generation and intelligent automation built in.',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'High-converting single-page sites designed to drive signups, launches and campaigns.',
  },
  {
    icon: User,
    title: 'Portfolio Websites',
    description: 'Showcase your work and skills with a clean, memorable personal portfolio.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Websites',
    description: 'Online stores with product catalogs, cart, checkout and secure payment integration.',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description: 'Transform your outdated website into a modern, fast and conversion-focused experience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive Design',
    description: 'Flawless experiences across every device — mobile, tablet and desktop.',
  },
  {
    icon: Gauge,
    title: 'Website Maintenance',
    description: 'Ongoing updates, backups, performance tuning and security monitoring for peace of mind.',
  },
];

export interface Project {
  name: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
  demoUrl: string;
}

export const projectCategories = [
  'All',
  'Business',
  'Education',
  'Hospitality',
  'Health & Fitness',
  'Retail',
  'Creative',
  'Industrial',
];

export const projects: Project[] = [
  {
    name: 'Restaurant Website',
    category: 'Hospitality',
    description: 'An elegant restaurant website with online menu, table reservation and gallery showcase.',
    tools: ['Bolt', 'Canva', 'Google AI Studio'],
    image: 'https://images.pexels.com/photos/27138849/pexels-photo-27138849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    demoUrl: '#',
  },
  {
    name: 'School Website',
    category: 'Education',
    description: 'A modern school website with admissions portal, event calendar and faculty pages.',
    tools: ['Lovable', 'Canva', 'ChatGPT'],
    image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    demoUrl: '#',
  },
  {
    name: 'IT Company Website',
    category: 'Business',
    description: 'A corporate IT services website with service pages, case studies and contact flow.',
    tools: ['Bolt', 'n8n', 'Google AI Studio'],
    image: 'https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    demoUrl: '#',
  },
  {
    name: 'Hotel & Resort Website',
    category: 'Hospitality',
    description: 'A luxury resort website with room gallery, booking inquiry and immersive visuals.',
    tools: ['Bolt', 'Canva', 'ChatGPT'],
    image: 'https://images.pexels.com/photos/2259226/pexels-photo-2259226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    demoUrl: '#',
  },
  {
    name: 'Gym Website',
    category: 'Health & Fitness',
    description: 'A fitness studio website with class schedules, membership plans and trainer profiles.',
    tools: ['Lovable', 'Canva', 'Google AI Studio'],
    image: 'https://images.pexels.com/photos/4716814/pexels-photo-4716814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    demoUrl: '#',
  },
  {
    name: 'Local Shop Website',
    category: 'Retail',
    description: 'A neighborhood shop website with product showcase, location map and WhatsApp ordering.',
    tools: ['Bolt', 'Canva', 'n8n'],
    image: 'https://images.pexels.com/photos/10195686/pexels-photo-10195686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    demoUrl: '#',
  },
  {
    name: 'Photographer Website',
    category: 'Creative',
    description: 'A visual portfolio for a photographer with filterable gallery and booking inquiry.',
    tools: ['Bolt', 'Canva', 'ChatGPT'],
    image: 'https://images.pexels.com/photos/36697247/pexels-photo-36697247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    demoUrl: '#',
  },
  {
    name: 'Manufacturing Website',
    category: 'Industrial',
    description: 'An industrial manufacturing website with product catalog, capabilities and RFQ form.',
    tools: ['Lovable', 'n8n', 'Google AI Studio'],
    image: 'https://images.pexels.com/photos/7178310/pexels-photo-7178310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    demoUrl: '#',
  },
];

export interface Skill {
  name: string;
  level: number;
}

export const skills: Skill[] = [
  { name: 'AI Website Development', level: 92 },
  { name: 'No-Code Development', level: 95 },
  { name: 'Prompt Engineering', level: 88 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Responsive Web Design', level: 90 },
  { name: 'AI Tools', level: 93 },
  { name: 'Website Optimization', level: 82 },
  { name: 'Automation', level: 80 },
];

export const tools = [
  'Bolt',
  'Lovable',
  'Google AI Studio',
  'Canva',
  'n8n',
  'ChatGPT',
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: "Understand the client's business, goals and requirements in detail.",
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Plan the website structure, content strategy and design direction.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Build and optimize the website using AI and no-code tools for speed.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Test, deploy and provide final support to ensure everything runs smoothly.',
  },
];

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'STARTER',
    price: '₹4,999+',
    features: [
      'Basic business website',
      'Responsive design',
      '3–5 sections',
      'Contact form',
    ],
  },
  {
    name: 'PROFESSIONAL',
    price: '₹9,999+',
    features: [
      'Complete business website',
      'Premium UI',
      'Responsive design',
      'Multiple pages',
      'WhatsApp integration',
      'Basic SEO',
    ],
    highlighted: true,
  },
  {
    name: 'PREMIUM',
    price: '₹19,999+',
    features: [
      'Advanced website',
      'Custom UI/UX',
      'Advanced functionality',
      'AI features',
      'SEO optimization',
      'Priority support',
    ],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Demo Client One',
    role: 'Restaurant Owner',
    text: 'This is a placeholder testimonial. Replace it with a real review from a client describing their experience working with Alex.',
    initials: 'DC',
  },
  {
    name: 'Demo Client Two',
    role: 'School Administrator',
    text: 'This is a placeholder testimonial. Replace it with a real review from a client describing their experience working with Alex.',
    initials: 'DC',
  },
  {
    name: 'Demo Client Three',
    role: 'Startup Founder',
    text: 'This is a placeholder testimonial. Replace it with a real review from a client describing their experience working with Alex.',
    initials: 'DC',
  },
];

export const projectTypes = [
  'Business Website',
  'Landing Page',
  'E-commerce Website',
  'Portfolio Website',
  'Website Redesign',
  'AI-Powered Website',
  'Other',
];

export const budgetRanges = [
  '₹4,999 – ₹9,999',
  '₹10,000 – ₹19,999',
  '₹20,000 – ₹49,999',
  '₹50,000+',
  'Let\'s discuss',
];
