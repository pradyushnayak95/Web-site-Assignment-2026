import testimonialsData from '../data/testimonials.json';
import type { Testimonial } from '../types/testimonial';

export async function getTestimonials(): Promise<Testimonial[]> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return testimonialsData as Testimonial[];
}
