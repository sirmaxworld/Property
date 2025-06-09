import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/Background1.jpeg')"
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 animate-fade-in">
          Bauland mit Weitsicht <span className="text-3xl md:text-4xl text-emerald-600 whitespace-nowrap">Zum Verkauf</span>
        </h1>
        <div className="text-5xl md:text-7xl font-bold text-emerald-600 mb-6">
          CHF 780,000
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Einmalige Gelegenheit für Ihr Bauvorhaben.<br/>
          Realisieren Sie Ihr Traumhaus, Immobilien Vorhaben oder investieren Sie in ihre Zukunft.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg"
            onClick={scrollToGallery}
          >
            Grundstück ansehen
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Kontakt aufnehmen
          </Button>
        </div>
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-500 mx-auto cursor-pointer" onClick={scrollToGallery} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
