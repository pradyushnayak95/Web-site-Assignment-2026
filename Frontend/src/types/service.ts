export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  features: ServiceFeature[];
  technologies?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  services: Service[];
}
