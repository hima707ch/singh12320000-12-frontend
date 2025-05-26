import React from 'react';
import FilterSection from './FilterSection';
import PortfolioGrid from './PortfolioGrid';
import usePortfolio from './usePortfolio';

const Body = () => {
  const { 
    portfolioItems, 
    loading, 
    error,
    selectedType,
    selectedDate,
    handleTypeChange,
    handleDateChange
  } = usePortfolio();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center min-h-screen">Error: {error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-4xl font-bold text-center mb-8">Our Portfolio</h1>
      <FilterSection
        selectedType={selectedType}
        selectedDate={selectedDate}
        onTypeChange={handleTypeChange}
        onDateChange={handleDateChange}
      />
      <PortfolioGrid items={portfolioItems} />
    </div>
  );
};

export default Body;