export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  // Simulates network latency
  await new Promise((resolve) => setTimeout(resolve, 800));
  console.log('Contact form submitted to backend simulator:', data);
  return {
    success: true,
    message: 'Thank you for reaching out! A LUCID specialist will contact you within 24 hours.',
  };
}
