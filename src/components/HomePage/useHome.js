import { useState, useEffect } from 'react';

const useHome = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await fetch('/api/portfolio');
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio items');
        }
        const data = await response.json();
        setPortfolioItems(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPortfolioItems();
  }, []);

  return { portfolioItems, isLoading, error };
};

export default useHome;