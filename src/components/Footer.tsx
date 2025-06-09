
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-6 w-6" />
            <span className="text-xl font-semibold">Premium Land Sale</span>
          </div>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Your opportunity to own a piece of paradise. This exceptional property represents 
            the perfect blend of natural beauty, privacy, and investment potential.
          </p>
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60">
              © 2024 Premium Land Sale. All rights reserved. | Private Property Sale
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
