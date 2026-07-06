import { Helmet } from 'react-helmet-async';
import HomeHero from '../components/home/HomeHero';
import ClientsSection from '../components/home/ClientsSection';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustriesSection from '../components/home/IndustriesSection';
import StatsSection from '../components/common/StatsSection';
import TechStackSection from '../components/home/TechStackSection';
import TestimonialSection from '../components/common/TestimonialSection';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';
import NewsletterSection from '../components/common/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>LUCID — IT Solutions & Manpower Resource Services</title>
        <meta name="description" content="LUCID specializes in bespoke Software Development, IT staffing, dedicated developers, strategic IT consulting, and digital solutions." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LUCID — IT Solutions & Manpower Resource Services" />
        <meta property="og:description" content="Accelerate your product engineering cycles with vetted dedicated developers and custom software solutions from LUCID." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LUCID — IT Solutions & Manpower Resource Services" />
        <meta name="twitter:description" content="Accelerate your product engineering cycles with vetted dedicated developers and custom software solutions." />
      </Helmet>

      <HomeHero />
      <ClientsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesSection />
      <StatsSection />
      <TechStackSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <NewsletterSection />
    </>
  );
}
