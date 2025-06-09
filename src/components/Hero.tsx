
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in">
          Stunning Land
          <span className="block text-green-600">For Sale</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover your perfect piece of paradise. This exceptional property offers breathtaking views, 
          pristine natural beauty, and endless possibilities for your dream home or investment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            onClick={scrollToGallery}
          >
            View Property
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Owner
          </Button>
        </div>
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-green-600 mx-auto cursor-pointer" onClick={scrollToGallery} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
