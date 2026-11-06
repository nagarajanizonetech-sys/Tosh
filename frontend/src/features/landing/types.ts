import React from "react";

export interface EnquiryFormState {
  name: string;
  phone: string;
  specialty: string;
  message: string;
}

export interface LandingPageProps {
  loginTarget?: string;
  onLogin?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onSubmitEnquiry?: (formState: EnquiryFormState) => void;
}

export interface ClinicalService {
  id: string;
  category: "ortho" | "skin" | "cosmetology";
  specialty: string;
  badge: string;
  title: string;
  doctor: string;
  summary: string;
  highlights: string[];
  url: string;
}

export interface IconProps {
  n:
    | "arrow"
    | "check"
    | "plus"
    | "phone"
    | "mail"
    | "pin"
    | "menu"
    | "close"
    | "spark"
    | "bone"
    | "clock"
    | string;
  s?: number;
}

export interface LogoProps {
  light?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

export type RouteNavigate = (path: string) => void;

export interface SiteHeaderProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  route: string;
  navigate: RouteNavigate;
  loginTarget: string;
  onLogin?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface AnimatedHeroTitleProps {
  line1: string;
  line2: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface Service3DItem {
  key: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  accentGlow: string;
  accentBorder: string;
  badgeBg: string;
  badgeColor: string;
  badgeBorder: string;
  highlights: string[];
}

export interface OrbitalReviewItem {
  name: string;
  role: string;
  initials: string;
  color: string;
  stars: number;
  quote: string;
}

export interface StreamReviewItem {
  name: string;
  care: string;
  initials: string;
  quote: string;
  location: string;
}

export interface HomeTestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  initials: string;
  dept: "Orthopaedics" | "Dermatology" | "Comprehensive Care";
  theme: "teal" | "rose" | "indigo";
  rating: number;
  highlight: string;
  quote: string;
}

