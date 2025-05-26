import React from 'react';
import images from '../assets/images';

const PortfolioGrid = ({ items }) => {
  return (
    <div id="PortfolioGrid_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={item._id}
          id={`PortfolioGrid_${index + 2}`}
          className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <img
            src={item.imageUrl || images[index % images.length]}
            alt={item.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-center">{item.description}</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;