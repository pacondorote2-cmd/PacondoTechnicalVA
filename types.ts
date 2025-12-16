import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
  tools: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  subLabel?: string;
  icon: LucideIcon;
  href: string;
}