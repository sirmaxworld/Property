
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PropertyGallery from '@/components/PropertyGallery';
import PropertyDetails from '@/components/PropertyDetails';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PropertyGallery />
      <PropertyDetails />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
