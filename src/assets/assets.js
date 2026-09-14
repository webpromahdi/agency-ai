import logo from './logo.svg';
import arrow_icon from './arrow_icon.svg';
import group_profile from './group_profile.png';
import bgImage1 from './bgImage1.png';
import bgImage2 from './bgImage2.png';
import hero_img from './hero_img.png';
import microsoft_logo from './microsoft_logo.png';
import zoom_logo from './zoom_logo.png';
import rakuten_logo from './rakuten_logo.png';
import coinbase_logo from './coinbase_logo.png';
import ads_icon from './ads_icon.svg';
import content_icon from './content_icon.svg';
import marketing_icon from './marketing_icon.svg';
import social_icon from './social_icon.svg';
import menu_icon from './menu_icon.svg';
import close_icon from './close_icon.svg';
import work_mobile_app from './work_mobile_app.png';
import work_fitness_app from './work_fitness_app.png';
import work_dashboard_management from './work_dashboard_management.png';
import email_icon from './email_icon.svg';
import person_icon from './person_icon.svg';
import facebook_icon from './facebook_icon.svg';
import twitter_icon from './twitter_icon.svg';
import instagram_icon from './instagram_icon.svg';
import linkedin_icon from './linkedin_icon.svg';
import logo_dark from './logo_dark.svg';
import airbnb_logo from './airbnb_logo.svg';
import google_logo from './google_logo.svg';
import menu_icon_dark from './menu_icon_dark.svg';
import sun_icon from './sun_icon.svg';
import moon_icon from './moon_icon.svg';

export const company_logos = [microsoft_logo, zoom_logo, rakuten_logo, coinbase_logo, airbnb_logo, google_logo];

const assets = {
  logo,
  arrow_icon,
  group_profile,
  bgImage1,
  bgImage2,
  hero_img,
  ads_icon,
  content_icon,
  marketing_icon,
  social_icon,
  menu_icon,
  close_icon,
  work_mobile_app,
  work_fitness_app,
  work_dashboard_management,
  email_icon,
  person_icon,
  facebook_icon,
  twitter_icon,
  instagram_icon,
  linkedin_icon,
  logo_dark,
  menu_icon_dark,
  sun_icon,
  moon_icon,
};

export default assets;

export const teamData = [
  {
    name: 'Haley Carter',
    title: 'CEO & founder',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
  },
  {
    name: 'James Walker',
    title: 'Ads manager',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
  },
  {
    name: 'Jessica Morgan',
    title: 'Vice president',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
  },
  {
    name: 'Ashley Bennett',
    title: 'Marketing & sales',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    name: 'Emily Parker',
    title: 'Content marketer',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    name: 'Ryan Mitchell',
    title: 'Content writer',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    name: 'Megan Brooks',
    title: 'Performance manager',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'Amber Foster',
    title: 'Senior writer',
    image: 'https://randomuser.me/api/portraits/women/14.jpg',
  },
];

export const statsData = [
  {
    value: 150,
    suffix: '+',
    decimals: 0,
    label: 'Projects Delivered',
    description: 'For innovative startups and global enterprises',
  },
  {
    value: 99.4,
    suffix: '%',
    decimals: 1,
    label: 'Client Satisfaction',
    description: 'Based on post-launch surveys & NPS score',
  },
  {
    value: 15,
    suffix: 'M+',
    decimals: 0,
    label: 'Active Users Reached',
    description: 'Across digital apps, sites, and campaigns',
  },
  {
    value: 4.9,
    suffix: '★',
    decimals: 1,
    label: 'Industry Rating',
    description: 'Recognized on Clutch, G2, and DesignRush',
  },
];

export const pricingData = [
  {
    name: 'Starter',
    badge: 'Seed & Early Stage',
    description: 'Essential digital identity, landing experience, and conversion fundamentals.',
    monthlyPrice: 1999,
    annualPrice: 1599,
    popular: false,
    features: [
      'High-converting landing page design',
      'Core brand messaging & visual system',
      'Targeted ad campaign setup (1 platform)',
      'Basic SEO & performance optimization',
      'Bi-weekly progress sync & reports',
    ],
    cta: 'Start with Starter',
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    description: 'Comprehensive digital execution designed to accelerate market traction and scale.',
    monthlyPrice: 4499,
    annualPrice: 3599,
    popular: true,
    features: [
      'Everything in Starter, plus:',
      'Full custom web application / site (React + Tailwind)',
      'Multi-channel growth marketing (Meta, Google, LinkedIn)',
      'A/B testing & funnel conversion optimization',
      'Dedicated Slack channel & weekly sprints',
      'Priority turnaround & continuous iterations',
    ],
    cta: 'Scale with Growth',
  },
  {
    name: 'Enterprise',
    badge: 'Scale-ups & Brands',
    description: 'Full-service dedicated digital squad tailored for complex requirements and rapid scale.',
    monthlyPrice: 8999,
    annualPrice: 7199,
    popular: false,
    features: [
      'Everything in Growth, plus:',
      'Dedicated product design & engineering squad',
      'Custom AI workflow & API integrations',
      'Comprehensive brand architecture & motion design',
      'Omnichannel ad budget scaling & attribution',
      '24/7 dedicated support & guaranteed 4hr SLA',
    ],
    cta: 'Talk to Enterprise Team',
  },
];

export const testimonialsData = [
  {
    name: 'Sophia Reynolds',
    role: 'Chief Marketing Officer',
    company: 'NexaFlow Systems',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    metric: '+240% Conversion Lift',
    quote:
      'Agency.AI completely overhauled our product launch funnel. We saw a 240% increase in inbound qualified leads within 60 days of launch.',
  },
  {
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Veloce Health',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    metric: '4.8M App Downloads',
    quote:
      'Their UI/UX team crafted an intuitive mobile experience that our users rave about every day. Truly world-class velocity and creative craftsmanship.',
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Product',
    company: 'Orbit Analytics',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    metric: '3.2x Revenue Growth',
    quote:
      'Partnering with Agency.AI felt like embedding a premier Silicon Valley design and growth team straight into our company. Exceptional outcomes.',
  },
  {
    name: 'David Chen',
    role: 'VP of Growth',
    company: 'Kinetix Fintech',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    metric: '99.9% Retention Score',
    quote:
      'From strategy sessions to pixel-perfect execution, they exceeded every benchmark we set. Our customer acquisition costs dropped by 42%.',
  },
];

export const faqData = [
  {
    question: 'What is your typical project timeline from kickoff to launch?',
    answer:
      'Most standard branding and web sprint projects launch in 3 to 6 weeks. Larger product builds and full custom web applications typically range from 8 to 12 weeks with incremental sprint deliverables.',
  },
  {
    question: 'What tech stack and design systems do you specialize in?',
    answer:
      'We specialize in modern frontend and full-stack solutions including React 19, Next.js, Vite, Tailwind CSS, Motion/Framer, TypeScript, and modern headless CMS platforms. Everything we build is responsive, accessible, and ultra-fast.',
  },
  {
    question: 'Can we upgrade, downgrade, or pause our plan as our needs change?',
    answer:
      'Yes, absolutely. Our retainer models are built for agile business needs. You can scale resources up or down at the start of any billing cycle with zero penalties or lock-in contracts.',
  },
  {
    question: 'Do you provide post-launch maintenance, analytics, and ongoing support?',
    answer:
      'Every project includes a 30-day post-launch warranty and monitoring period. We also provide ongoing optimization packages covering continuous A/B testing, speed tuning, feature additions, and security updates.',
  },
  {
    question: 'How do we get started on a project together?',
    answer:
      'Simply fill out our contact form below or book a discovery call. We will review your vision, goals, and technical requirements, and deliver a tailored proposal with transparent milestones within 48 hours.',
  },
];

