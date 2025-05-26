import React from 'react';
import images from '../assets/images';

const FeaturedWork = ({ portfolioItems, isLoading, error }) => {
  if (isLoading) {
    return (
      <div id="FeaturedWork_1" className="flex justify-center items-center h-96">
        <div id="FeaturedWork_2" className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="FeaturedWork_3" className="text-center text-red-500 p-8">
        Error loading portfolio items: {error}
      </div>
    );
  }

  return (
    <section id="FeaturedWork_4" className="py-20 bg-white">
      <div id="FeaturedWork_5" className="container mx-auto px-6">
        <h2 id="FeaturedWork_6" className="text-3xl font-bold text-center mb-12">Featured Work</h2>
        <div id="FeaturedWork_7" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={item._id} id={`FeaturedWork_8_${index}`} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                id={`FeaturedWork_9_${index}`}
                src={item.imageUrl || images[index % images.length]}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div id={`FeaturedWork_10_${index}`} className="p-6">
                <h3 id={`FeaturedWork_11_${index}`} className="text-xl font-semibold mb-2">{item.title}</h3>
                <p id={`FeaturedWork_12_${index}`} className="text-gray-600">{item.description}</p>
                <button id={`FeaturedWork_13_${index}`} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;