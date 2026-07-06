export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CompanyStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
