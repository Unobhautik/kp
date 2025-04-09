import React from 'react';
import Transition from '../components/Transition';

const GalleryPage: React.FC = () => {
  // Create an array of image data for b1 to b8
  const galleryImages = [
    { id: 1, name: 'Honey Product 1', imageUrl: '/b1.jpeg' },
    { id: 2, name: 'Honey Product 2', imageUrl: '/b2.jpeg' },
    { id: 3, name: 'Honey Product 3', imageUrl: '/b3.jpeg' },
    { id: 4, name: 'Honey Product 4', imageUrl: '/b4.jpeg' },
    { id: 5, name: 'Honey Product 5', imageUrl: '/b5.jpeg' },
    { id: 6, name: 'Honey Product 6', imageUrl: '/b6.jpeg' },
    { id: 7, name: 'Honey Product 7', imageUrl: '/b7.jpeg' },
    { id: 8, name: 'Honey Product 8', imageUrl: '/b8.jpeg' },
  ];

  return (
    <Transition>
      <div className="min-h-screen pt-24 pb-20">
        {/* Gallery Hero */}
        <section className="bg-honey-50 py-12">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-honey-900 mb-4">Product Gallery</h1>
            <p className="text-lg text-honey-700/80 max-w-2xl mx-auto">
              Explore our beautiful collection of premium honey products
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {galleryImages.map((item) => (
                <div key={item.id} className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-full h-full relative">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-3 text-white w-full">
                        <h3 className="font-medium truncate">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
};

export default GalleryPage;