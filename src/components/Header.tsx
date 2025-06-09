
import { MapPin, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-primary">Premium Land Sale</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>contact@yourland.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
