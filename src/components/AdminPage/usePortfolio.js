import { useState, useEffect } from 'react';

const usePortfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [error, setError] = useState(null);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(newItem)
      });

      if (!response.ok) {
        throw new Error('Failed to create portfolio item');
      }

      const data = await response.json();
      setPortfolioItems([...portfolioItems, data]);
      setNewItem({ title: '', description: '', imageUrl: '' });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/portfolio/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete portfolio item');
      }

      setPortfolioItems(portfolioItems.filter(item => item._id !== id));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    portfolioItems,
    newItem,
    setNewItem,
    handleSubmit,
    handleDelete,
    error
  };
};

export default usePortfolio;