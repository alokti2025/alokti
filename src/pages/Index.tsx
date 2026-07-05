import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Alokti Software Solutions | Leading Software Development Company</title>
        <meta 
          name="description" 
          content="Alokti Software Solutions - Your trusted partner for web development, app development, custom software, IT support, and digital marketing services. Leading the digital curve." 
        />
        <meta name="keywords" content="software development, web development, app development, IT support, digital marketing, India" />
        <meta name="author" content="Alokti Software Solutions" />
        <meta property="og:title" content="Alokti Software Solutions | Leading Software Development Company" />
        <meta property="og:description" content="We help businesses build powerful software solutions and grow their online presence." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://alokti.com" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <WhyUsSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
