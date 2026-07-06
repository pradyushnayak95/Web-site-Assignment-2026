import servicesData from '../data/services.json';
import type { ServiceCategory, Service } from '../types/service';

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  // Simulates network latency
  await new Promise((resolve) => setTimeout(resolve, 100));
  return servicesData as ServiceCategory[];
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  const categories = servicesData as ServiceCategory[];
  for (const category of categories) {
    const service = category.services.find((s) => s.slug === slug);
    if (service) return service as Service;
  }
  return undefined;
}

export async function getServiceCategoryBySlug(slug: string): Promise<ServiceCategory | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return (servicesData as ServiceCategory[]).find((c) => c.slug === slug);
}
