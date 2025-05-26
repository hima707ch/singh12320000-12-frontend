import React from 'react';
import Hero from './Hero';
import FeaturedWork from './FeaturedWork';
import useHome from './useHome';

const Body = () => {
  const { portfolioItems, isLoading, error } = useHome();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedWork portfolioItems={portfolioItems} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Body;