export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  pricingCategoryId: string;
  badge: string;
}

export interface PricingPackage {
  id: string;
  categoryId: string;
  title: string;
  price: string;
  priceNumber: number;
  isStartingPrice: boolean;
  tagline?: string;
  popular?: boolean;
  features: string[];
  disclaimer?: string;
  quoteMessage: string;
}

export interface SeparateChargeItem {
  id: string;
  title: string;
  cost: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  buttonLabel?: string;
}

export interface FeaturedProject {
  id: string;
  name: string;
  badge: string;
  description: string;
  businessImpact: string;
  outcomes: string[];
  tags: string[];
  image: string;
  liveUrl: string;
  primaryButtonLabel: string;
  repoUrl?: string;
  caseStudyUrl?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
}

