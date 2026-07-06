import faqData from '../data/faq.json';
import type { FAQ } from '../types/faq';

export async function getFAQs(): Promise<FAQ[]> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return faqData as FAQ[];
}

export async function getFAQsByCategory(category: string): Promise<FAQ[]> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return (faqData as FAQ[]).filter(
    (faq) => faq.category.toLowerCase() === category.toLowerCase()
  );
}
