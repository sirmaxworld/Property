
import { MapPin, Ruler, Trees, Mountain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PropertyDetails = () => {
  const features = [
    {
      icon: <Ruler className="h-8 w-8 text-green-600" />,
      title: "25 Acres",
      description: "Expansive land with diverse topography"
    },
    {
      icon: <Trees className="h-8 w-8 text-green-600" />,
      title: "Wooded Areas",
      description: "Mature trees and natural forest preservation"
    },
    {
      icon: <Mountain className="h-8 w-8 text-green-600" />,
      title: "Scenic Views",
      description: "Breathtaking vistas and elevated positions"
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      title: "Prime Location",
      description: "Easy access to amenities while maintaining privacy"
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Property Details</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This exceptional property offers the perfect combination of natural beauty, privacy, and accessibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">About This Property</h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                This stunning 25-acre parcel represents a rare opportunity to own a piece of pristine natural beauty. 
                The property features rolling hills, mature woodlands, and breathtaking scenic overlooks that provide 
                the perfect setting for your dream home or investment project.
              </p>
              <p>
                The land offers exceptional privacy while maintaining convenient access to local amenities. 
                With its diverse topography and natural features, this property provides endless possibilities 
                for development, recreation, or conservation.
              </p>
              <p>
                Whether you're looking to build your forever home, create a private retreat, or make a smart 
                investment, this property offers the perfect foundation for your vision.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Key Features</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>25 acres of diverse terrain</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Mature forest and open meadows</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Elevated building sites with views</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Private road access</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Natural water features</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Abundant wildlife and recreation opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
