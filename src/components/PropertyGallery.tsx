import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const PropertyGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: '/images/1.jpg', alt: 'Bild 1' },
    { src: '/images/2.jpg', alt: 'Bild 2' },
    { src: '/images/6.jpg', alt: 'Bild 6' },
    { src: '/images/3.jpg', alt: 'Bild 3' },
    { src: '/images/4.jpg', alt: 'Bild 4' },
    { src: '/images/5.jpg', alt: 'Bild 5' },
    { src: '/images/7.jpg', alt: 'Bild 7' },
    { src: '/images/8.jpg', alt: 'Bild 8' },
    { src: '/images/9.jpg', alt: 'Bild 9' },
    { src: '/images/10.jpg', alt: 'Bild 10' },
    { src: '/images/11.jpg', alt: 'Bild 11' },
    { src: '/images/12.jpg', alt: 'Bild 12' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Bildergalerie</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie die natürliche Schönheit und die beeindruckende Landschaft dieses außergewöhnlichen Grundstücks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-3 hover:rotate-1"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 flex items-center justify-center">
                <span className="text-white text-xs">+</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGallery;
