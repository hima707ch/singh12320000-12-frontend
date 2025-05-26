import { useState, useEffect } from 'react';

const usePortfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedDate, setSelectedDate] = useState('Newest');

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    try {
      const response = await fetch('/api/portfolio');
      if (!response.ok) throw new Error('Failed to fetch portfolio items');
      const data = await response.json();
      setPortfolioItems(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    filterItems(type, selectedDate);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    filterItems(selectedType, date);
  };

  const filterItems = (type, date) => {
    let filtered = [...portfolioItems];
    
    if (type !== 'All') {
      filtered = filtered.filter(item => item.type === type);
    }

    if (date === 'Newest') {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    setPortfolioItems(filtered);
  };

  return {
    portfolioItems,
    loading,
    error,
    selectedType,
    selectedDate,
    handleTypeChange,
    handleDateChange
  };
};

export default usePortfolio;