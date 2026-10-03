import {
  ServiceCategory,
  PricingPackage,
  SeparateChargeItem,
  ProcessStep,
  ProjectItem,
  FeaturedProject,
  ExperienceItem,
} from '../types';
import { getPackageQuoteMessage } from '../utils/whatsapp';

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Website Development',
    description:
      'Fast, responsive and professionally designed websites that help businesses establish credibility and convert visitors into enquiries.',
    iconName: 'Globe',
    pricingCategoryId: 'website',
    badge: 'Core Service',
  },
  {
    id: 'mobile-app',
    number: '02',
    title: 'Mobile App Development',
    description:
      'Custom mobile applications built around your product, customers and business workflows.',
    iconName: 'Smartphone',
    pricingCategoryId: 'mobile',
    badge: 'iOS & Android',
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-Commerce Solutions',
    description:
      'Online stores with product catalogs, cart functionality, checkout flows and business management features.',
    iconName: 'ShoppingBag',
    pricingCategoryId: 'website',
    badge: 'High Conversion',
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'Digital Marketing',
    description:
      'Meta Ads management and social media creative services designed around your campaign objectives.',
    iconName: 'TrendingUp',
    pricingCategoryId: 'marketing',
    badge: 'ROI Focused',
  },
  {
    id: 'business-automation',
    number: '05',
    title: 'Business Automation',
    description:
      'Connect repetitive business tasks, capture leads and simplify workflows through practical automation.',
    iconName: 'Cpu',
    pricingCategoryId: 'automation',
    badge: 'Time Saving',
  },
  {
    id: 'ai-whatsapp',
    number: '06',
    title: 'AI & WhatsApp Solutions',
    description:
      'AI-assisted customer enquiries, lead qualification and WhatsApp workflows tailored to your business requirements.',
    iconName: 'Bot',
    pricingCategoryId: 'automation',
    badge: '24/7 Response',
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  // A. WEBSITE DEVELOPMENT
  {
    id: 'web-landing-page',
    categoryId: 'website',
    title: 'Landing Page Website',
    price: '₹4,999',
    priceNumber: 4999,
    isStartingPrice: false,
    tagline: 'Ideal for product launches, local campaigns & lead capture',
    features: [
      'Single-page website',
      'Responsive mobile-first layout',
      'Business information and service presentation',
      'WhatsApp or contact integration',
      'Basic deployment support',
    ],
    quoteMessage: getPackageQuoteMessage('Landing Page Website', '₹4,999', false),
  },
  {
    id: 'web-portfolio-business',
    categoryId: 'website',
    title: 'Portfolio / Business Website',
    price: '₹9,999',
    priceNumber: 9999,
    isStartingPrice: false,
    popular: true,
    tagline: 'The complete digital presence for established businesses',
    features: [
      'Multi-page portfolio or business website',
      'Professional UI/UX',
      'Service and portfolio sections',
      'Contact or WhatsApp integration',
      'Basic on-page SEO setup',
      'Deployment support',
    ],
    quoteMessage: getPackageQuoteMessage('Portfolio / Business Website', '₹9,999', false),
  },
  {
    id: 'web-ecommerce',
    categoryId: 'website',
    title: 'E-Commerce Website',
    price: '₹14,999',
    priceNumber: 14999,
    isStartingPrice: false,
    tagline: 'Full online store with catalog and cart functionality',
    features: [
      'Product catalog',
      'Product detail pages',
      'Shopping cart',
      'Checkout workflow',
      'Payment gateway integration, subject to provider requirements',
      'Order management functionality',
      'Basic administration functionality',
    ],
    quoteMessage: getPackageQuoteMessage('E-Commerce Website', '₹14,999', false),
  },
  {
    id: 'web-custom-premium',
    categoryId: 'website',
    title: 'Custom Premium Website',
    price: '₹18,999',
    priceNumber: 18999,
    isStartingPrice: true,
    tagline: 'Bespoke engineering, 3D interactions and advanced workflows',
    features: [
      'Custom UI/UX',
      'Advanced animations and interactions',
      'Tailored business functionality',
      'Advanced integrations',
      'Custom workflows or dashboards as agreed',
    ],
    disclaimer: 'Final scope depends on requirements.',
    quoteMessage: getPackageQuoteMessage('Custom Premium Website', '₹18,999', true),
  },

  // B. MOBILE APP DEVELOPMENT
  {
    id: 'app-basic',
    categoryId: 'mobile',
    title: 'Basic Mobile App',
    price: '₹24,999',
    priceNumber: 24999,
    isStartingPrice: true,
    tagline: 'For applications with a clearly defined core purpose',
    features: [
      'Targeted single-purpose utility or catalog app',
      'Core screens and structured navigation',
      'Clean modern interface',
      'Backend integration where required',
      'Authentication where required',
    ],
    disclaimer:
      'For relatively simple applications with a clearly defined core purpose. Potential features depend on scope and may include core screens, navigation, basic UI, backend integration and authentication where required.',
    quoteMessage: getPackageQuoteMessage('Basic Mobile App', '₹24,999', true),
  },
  {
    id: 'app-complete',
    categoryId: 'mobile',
    title: 'Complete Mobile App',
    price: '₹39,999',
    priceNumber: 39999,
    isStartingPrice: true,
    popular: true,
    tagline: 'Comprehensive business applications with workflows',
    features: [
      'User accounts and profile management',
      'Database integration and synchronization',
      'Business workflows and logic',
      'Admin functionality',
      'APIs and push notifications',
    ],
    disclaimer:
      'For more comprehensive business applications. Potential features depend on scope and may include user accounts, profiles, database integration, business workflows, admin functionality, APIs and notifications.',
    quoteMessage: getPackageQuoteMessage('Complete Mobile App', '₹39,999', true),
  },
  {
    id: 'app-advanced',
    categoryId: 'mobile',
    title: 'Advanced / Custom Mobile App',
    price: '₹59,999',
    priceNumber: 59999,
    isStartingPrice: true,
    tagline: 'Multi-role ecosystems with custom dashboards and integrations',
    features: [
      'Complex business logic & multiple user roles',
      'Advanced workflows and state management',
      'Custom dashboards and analytics',
      'Third-party software & payment integrations',
      'High-performance architecture',
    ],
    disclaimer:
      'For projects requiring more complex functionality, multiple user roles, advanced workflows, custom dashboards and third-party integrations. All possible features are not automatically included at the starting price.',
    quoteMessage: getPackageQuoteMessage('Advanced / Custom Mobile App', '₹59,999', true),
  },

  // C. META ADS MANAGEMENT
  {
    id: 'meta-ads-7',
    categoryId: 'marketing',
    title: '7-Day Campaign Management',
    price: '₹2,999',
    priceNumber: 2999,
    isStartingPrice: false,
    tagline: 'Short sprint for localized promotions or event buzz',
    features: [
      'Campaign setup & configuration',
      'Audience targeting & geographical focus',
      'Ad creative implementation',
      'Performance monitoring & budget pacing',
      '7-day wrap-up reporting',
    ],
    disclaimer:
      'Advertising spend paid to Meta is separate from the management fee. Campaign performance and results are not guaranteed.',
    quoteMessage:
      'Hi Local Rise Web Studio, I am interested in the 7-Day Meta Ads Management package for ₹2,999. Please share campaign onboarding details.',
  },
  {
    id: 'meta-ads-15',
    categoryId: 'marketing',
    title: '15-Day Campaign Management',
    price: '₹5,999',
    priceNumber: 5999,
    isStartingPrice: false,
    tagline: 'Mid-length optimization sprint for lead generation',
    features: [
      'Strategic campaign architecture',
      'Audience segmentation & A/B testing',
      'Creative supervision & copy tweaks',
      'Daily monitoring & bid optimization',
      'Mid-campaign review & final reporting',
    ],
    disclaimer:
      'Advertising spend paid to Meta is separate from the management fee. Campaign performance and results are not guaranteed.',
    quoteMessage:
      'Hi Local Rise Web Studio, I am interested in the 15-Day Meta Ads Management package for ₹5,999. Please share campaign onboarding details.',
  },
  {
    id: 'meta-ads-30',
    categoryId: 'marketing',
    title: '30-Day Campaign Management',
    price: '₹9,999',
    priceNumber: 9999,
    isStartingPrice: false,
    popular: true,
    tagline: 'Full monthly growth cycle with scaling strategies',
    features: [
      'End-to-end Meta Ads strategy',
      'Funnel-based targeting & retargeting setup',
      'Continuous creative rotation guidance',
      'Active conversion rate & cost optimization',
      'Comprehensive monthly analytics & insights',
    ],
    disclaimer:
      'Advertising spend paid to Meta is separate from the management fee. Campaign performance and results are not guaranteed.',
    quoteMessage:
      'Hi Local Rise Web Studio, I am interested in the 30-Day Meta Ads Management package for ₹9,999. Please share campaign onboarding details.',
  },

  // D. LOGO DESIGN & SOCIAL MEDIA
  {
    id: 'creative-logo',
    categoryId: 'design',
    title: 'Logo Design',
    price: '₹1,999',
    priceNumber: 1999,
    isStartingPrice: true,
    tagline: 'Memorable brand identity crafted for your market',
    features: [
      "Custom logo design based on client's brand",
      'Vector master assets (SVG, PNG, EPS)',
      'Light & dark background variations',
      'Agreed deliverable formats for print & web',
    ],
    disclaimer: 'Deliverables tailored to client brand requirements and agreed scope.',
    quoteMessage: getPackageQuoteMessage('Logo Design', '₹1,999', true),
  },
  {
    id: 'creative-social-5',
    categoryId: 'design',
    title: '5 Social Media Posts',
    price: '₹999',
    priceNumber: 999,
    isStartingPrice: false,
    tagline: 'Curated promotional visuals for Instagram/Facebook',
    features: [
      '5 custom graphic designs',
      'Formatted for selected social platforms',
      'Consistent brand colors and typography',
      'Engaging layouts for product/service highlights',
    ],
    disclaimer:
      'Advanced video production, photography, extensive copywriting and additional revisions may require separate quotations.',
    quoteMessage:
      'Hi Local Rise Web Studio, I am interested in the 5 Social Media Posts package for ₹999. Please share the details.',
  },
  {
    id: 'creative-social-10',
    categoryId: 'design',
    title: '10 Social Media Posts',
    price: '₹1,999',
    priceNumber: 1999,
    isStartingPrice: false,
    popular: true,
    tagline: 'Sustained monthly visual presence across channels',
    features: [
      '10 custom graphic designs',
      'Consistent campaign aesthetic',
      'Multi-platform sizing (feed & story formats)',
      'Optimized for brand awareness and engagement',
    ],
    disclaimer:
      'Advanced video production, photography, extensive copywriting and additional revisions may require separate quotations.',
    quoteMessage:
      'Hi Local Rise Web Studio, I am interested in the 10 Social Media Posts package for ₹1,999. Please share the details.',
  },

  // E. BUSINESS AUTOMATION
  {
    id: 'auto-basic',
    categoryId: 'automation',
    title: 'Basic Business Automation',
    price: '₹9,999',
    priceNumber: 9999,
    isStartingPrice: true,
    tagline: 'Eliminate repetitive manual data entry tasks',
    features: [
      'Form-to-spreadsheet automated sync',
      'Instant lead capture triggers',
      'Automated email notification chains',
      'Simple application integrations',
    ],
    disclaimer:
      'Automation projects are quoted according to workflow complexity, integrations, AI usage, data requirements, platform limitations and support requirements.',
    quoteMessage: getPackageQuoteMessage('Basic Business Automation', '₹9,999', true),
  },
  {
    id: 'auto-whatsapp',
    categoryId: 'automation',
    title: 'WhatsApp Automation',
    price: '₹14,999',
    priceNumber: 14999,
    isStartingPrice: true,
    tagline: 'Structured business messaging workflows that convert',
    features: [
      'Automated instant greeting and responses',
      'Enquiry routing to team members',
      'Structured lead capture sequences',
      'Basic scheduled follow-ups',
    ],
    disclaimer:
      'Automation projects are quoted according to workflow complexity, integrations, AI usage, data requirements, platform limitations and support requirements.',
    quoteMessage: getPackageQuoteMessage('WhatsApp Automation', '₹14,999', true),
  },
  {
    id: 'auto-ai',
    categoryId: 'automation',
    title: 'AI Automation',
    price: '₹19,999',
    priceNumber: 19999,
    isStartingPrice: true,
    tagline: 'Intelligent data extraction and automated reasoning',
    features: [
      'Automated document & text information processing',
      'Smart customer enquiry classification',
      'Content summarization & insight extraction',
      'Integration with selected AI model services',
    ],
    disclaimer:
      'Automation projects are quoted according to workflow complexity, integrations, AI usage, data requirements, platform limitations and support requirements.',
    quoteMessage: getPackageQuoteMessage('AI Automation', '₹19,999', true),
  },
  {
    id: 'auto-ai-whatsapp',
    categoryId: 'automation',
    title: 'AI + WhatsApp Automation',
    price: '₹24,999',
    priceNumber: 24999,
    isStartingPrice: true,
    popular: true,
    tagline: 'Intelligent 24/7 customer assistant with human handoff',
    features: [
      'AI-assisted conversational customer enquiries',
      'Automated lead qualification questionnaires',
      'Structured lead storage in CRM/Database',
      'Seamless human handoff when complex issues arise',
    ],
    disclaimer:
      'Automation projects are quoted according to workflow complexity, integrations, AI usage, data requirements, platform limitations and support requirements.',
    quoteMessage:
      "Hi Local Rise Web Studio, I'm interested in the AI + WhatsApp Automation package starting at ₹24,999+. I'd like to discuss my business requirements and receive a customized quotation.",
  },
  {
    id: 'auto-advanced',
    categoryId: 'automation',
    title: 'Advanced Business Automation',
    price: '₹39,999',
    priceNumber: 39999,
    isStartingPrice: true,
    tagline: 'End-to-end multi-app orchestration for scaling teams',
    features: [
      'Multi-step cross-platform workflows',
      'Enterprise CRM & ERP integrations',
      'Multiple connected cloud applications',
      'Executive reporting dashboards & lead routing',
      'Robust error-handling & audit logs',
    ],
    disclaimer:
      'Automation projects are quoted according to workflow complexity, integrations, AI usage, data requirements, platform limitations and support requirements.',
    quoteMessage: getPackageQuoteMessage('Advanced Business Automation', '₹39,999', true),
  },
];

export const PRICING_CATEGORIES = [
  { id: 'all', label: 'All Packages' },
  { id: 'website', label: 'Websites' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'automation', label: 'AI & Automation' },
  { id: 'marketing', label: 'Meta Ads' },
  { id: 'design', label: 'Design & Social' },
];

export const SEPARATE_CHARGES_DATA: SeparateChargeItem[] = [
  {
    id: 'web-publishing',
    title: 'Website Publishing / Deployment',
    cost: '₹2,499',
    description: 'Where applicable as a separate service for custom server setup or client domain linking.',
    iconName: 'Server',
  },
  {
    id: 'app-publishing',
    title: 'Mobile App Publishing Assistance',
    cost: '₹2,499',
    description: 'Assistance with App Store & Google Play Store submission where applicable as a separate service.',
    iconName: 'UploadCloud',
  },
  {
    id: 'domain',
    title: 'Domain Registration',
    cost: 'Market Rate',
    description: 'Charged separately according to the selected domain name, extension, availability, registrar and registration period.',
    iconName: 'Compass',
  },
  {
    id: 'hosting',
    title: 'Hosting & Infrastructure',
    cost: 'Usage Based',
    description: 'Charged separately according to hosting tier, traffic, storage, and server requirements.',
    iconName: 'HardDrive',
  },
  {
    id: 'maintenance',
    title: 'Website & App Maintenance',
    cost: 'Custom Scope',
    description: 'Charged separately according to the required maintenance scope, security updates, and frequency.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'external-services',
    title: 'External Services & APIs',
    cost: 'Provider Direct',
    description: 'Third-party APIs, AI model usage, WhatsApp provider charges, automation subscriptions, payment gateway charges, and software licenses are separate.',
    iconName: 'Layers',
  },
  {
    id: 'meta-budget',
    title: 'Meta Ads Advertising Budget',
    cost: 'Paid to Meta',
    description: 'The actual advertising spend is paid directly to Meta and is separate from the campaign management fee.',
    iconName: 'CreditCard',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, audience, goals and requirements.',
    deliverables: ['Business goals audit', 'Target audience mapping', 'Technical feasibility'],
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Confirm the features, project scope, timeline and quotation.',
    deliverables: ['Detailed scope sheet', 'Milestone roadmap', 'Transparent written quotation'],
  },
  {
    number: '03',
    title: 'Build',
    description: 'Design, develop, test and refine the agreed solution.',
    deliverables: ['Responsive UI/UX design', 'Production-grade code', 'Multi-device testing'],
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploy the approved project and provide agreed handover or support.',
    deliverables: ['Production deployment', 'Training & handover', 'Post-launch verification'],
  },
];

export const WHY_US_POINTS = [
  {
    title: 'Solutions tailored to your requirements',
    description: 'Every project is engineered around your exact customer flow, business objectives, and technical constraints.',
    icon: 'Sliders',
  },
  {
    title: 'Responsive, mobile-first design',
    description: 'Flawless presentation and swift interactions across smartphones, tablets, laptops, and ultra-wide screens.',
    icon: 'MonitorSmartphone',
  },
  {
    title: 'Clear project scope & transparent quotations',
    description: 'No hidden clauses or surprise invoices. Written deliverables, timelines, and clear terms before any work begins.',
    icon: 'FileCheck',
  },
  {
    title: 'Practical integrations and automation',
    description: 'Real-world pipelines that reduce manual chores, capture warm leads, and connect to WhatsApp and your CRM.',
    icon: 'Zap',
  },
  {
    title: 'Focus on usability and performance',
    description: 'Lightweight builds, fast loading times, clean typography, and high conversion accessibility.',
    icon: 'Gauge',
  },
  {
    title: 'Support options defined according to requirements',
    description: 'Structured maintenance and handovers so your team can confidently own and operate the final digital asset.',
    icon: 'Headphones',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'al-madina',
    name: 'Al Madina Consultants',
    description:
      'SaaS recruitment platform with resume parsing, automatic candidate matching, and secure client portals.',
    image: '/portfolio/al-madina.jpg',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Express', 'Vercel'],
    liveUrl: 'https://al-madina-consultants.vercel.app/',
    buttonLabel: 'Live Demo',
  },
  {
    id: 'your-green-foods',
    name: 'Your Green Foods',
    description:
      'High-performance organic e-commerce storefront engineered for fast mobile checkout conversion.',
    image: '/portfolio/your-green-foods.jpg',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://your-green-foods.vercel.app/',
    buttonLabel: 'Live Demo',
  },
  {
    id: 'pixel-stack',
    name: 'Pixel Stack',
    description:
      'A premium business website agency portfolio designed to showcase fast, responsive, and SEO-optimized web solutions.',
    image: '/portfolio/pixel-stack.jpg',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    liveUrl: 'https://pixel-stack-alpha.vercel.app/',
    buttonLabel: 'Live Demo',
  },
  {
    id: 'groundx-vellore',
    name: 'GroundX Vellore',
    description:
      'A high-performance real estate portal with advanced property search and direct customer lead capture.',
    image: '/portfolio/groundx-vellore.jpg',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Firebase', 'Vercel'],
    liveUrl: 'https://groundx-vellore.vercel.app/',
    buttonLabel: 'Live Demo',
  },
];

export const FEATURED_PROJECT_NEARVA: FeaturedProject = {
  id: 'nearva',
  name: 'Nearva',
  badge: 'Startup Founder Project',
  description:
    'Nearva is a hyperlocal discovery engine matching users with local verified service professionals. Engineered location indexing, real-time spatial lookups, and automated checkout funnels to manage active search queries.',
  businessImpact:
    'Reduced provider matchmaking search time from hours to under 3 minutes, processing localized location transactions securely.',
  outcomes: [
    'Built custom spatial database query system handling 3,000+ local searches.',
    'Maintained 99.9% uptime for edge-hosted serverless backend routes.',
    'Structured responsive layouts achieving fast checkout conversion.',
  ],
  tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Vercel'],
  image: '/portfolio/nearva-mobile.jpg',
  liveUrl: 'https://www.nearva.in',
  primaryButtonLabel: 'Launch Nearva',
};

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'reliable-vision',
    period: '2024 – PRESENT',
    company: 'Independent / Reliable Vision Web Studio',
    role: 'Freelance Software Developer',
    description:
      'Delivered 5 web development projects for 4–5 clients across e-commerce, business and portfolio websites. Built CRM foundations for Reliable Vision and designed automation architecture involving n8n, Gemini and WhatsApp Cloud API. Managed deployments using Git, GitHub and Vercel.',
    highlights: [
      'Delivered end-to-end web solutions using Python, JavaScript and FastAPI across multiple client engagements.',
      'Designed automation architecture integrating n8n, Gemini API and WhatsApp Cloud API for client workflow optimization.',
      'Built CRM foundations for Reliable Vision Web Studio to streamline client management and project delivery.',
    ],
    tags: ['React', 'Next.js', 'Python', 'FastAPI', 'MongoDB', 'Tailwind CSS', 'Vercel', 'Git'],
  },
  {
    id: 'nearva-exp',
    period: '2024 – PRESENT',
    company: 'Nearva',
    role: 'Founding Full-Stack Developer',
    description:
      'Designed and engineered the end-to-end hyperlocal service marketplace. Designed the core location-indexing pipelines, real-time matchmaking algorithms, and payment checkout flows to maintain system responsiveness on weak mobile networks.',
    highlights: [
      'Built a PostgreSQL spatial database index, cutting location query lookups from seconds to milliseconds.',
      'Integrated Google Maps API routing and secure checkout, supporting localized searches.',
      'Achieved 99.9% API uptime on edge-hosted serverless backend routes.',
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Vercel', 'Tailwind CSS'],
  },
];

