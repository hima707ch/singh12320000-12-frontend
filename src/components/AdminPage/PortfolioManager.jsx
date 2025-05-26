import React from 'react';
import usePortfolio from './usePortfolio';
import images from '../assets/images';

const PortfolioManager = () => {
  const {
    portfolioItems,
    newItem,
    setNewItem,
    handleSubmit,
    handleDelete,
    error
  } = usePortfolio();

  return (
    <div id="PortfolioManager_1" className="space-y-8">
      <div id="PortfolioManager_2" className="bg-white p-6 rounded-lg shadow">
        <h2 id="PortfolioManager_3" className="text-xl font-semibold mb-4">Add New Portfolio Item</h2>
        {error && (
          <div id="PortfolioManager_4" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form id="PortfolioManager_5" onSubmit={handleSubmit} className="space-y-4">
          <div id="PortfolioManager_6">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={newItem.title}
              onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div id="PortfolioManager_7">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows="3"
              required
            />
          </div>
          <div id="PortfolioManager_8">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              value={newItem.imageUrl}
              onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Add Item
          </button>
        </form>
      </div>

      <div id="PortfolioManager_9" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={item.imageUrl || images[0]}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <button
                onClick={() => handleDelete(item._id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioManager;