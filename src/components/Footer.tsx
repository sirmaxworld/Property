import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-6 w-6" />
            <span className="text-xl font-semibold">Bauland mit Weitsicht</span>
          </div>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Ihre Gelegenheit, ein Stück Paradies zu besitzen. Dieses außergewöhnliche Grundstück vereint natürliche Schönheit, Privatsphäre und Investitionspotenzial.
          </p>
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60">
              © 2024 Gellert.live. Alle Rechte vorbehalten. | Privatverkauf
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
