import type { NavItem, SocialLink, ContactInfo } from '../types/common';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_SERVICES: NavItem[] = [
  { label: 'Software Development', href: '/services#software-development' },
  { label: 'Manpower Solutions', href: '/services#manpower-solutions' },
  { label: 'IT Consulting', href: '/services#it-consulting' },
  { label: 'Digital Solutions', href: '/services#digital-solutions' },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/lucid', icon: 'linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com/lucid', icon: 'twitter' },
  { platform: 'GitHub', url: 'https://github.com/lucid', icon: 'github' },
  { platform: 'Facebook', url: 'https://facebook.com/lucid', icon: 'facebook' },
];

export const CONTACT_INFO: ContactInfo = {
  address: '123 Innovation Drive, Suite 400, San Francisco, CA 94105',
  phone: '+1 (415) 555-0120',
  email: 'hello@lucid.com',
  mapUrl: 'https://maps.google.com',
};

export const COMPANY_NAME = 'LUCID';
export const COMPANY_TAGLINE = 'Empowering Businesses Through Technology & Talent';
