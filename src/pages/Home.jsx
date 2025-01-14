import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleCategoryClick = (searchTerm) => {
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 bg-brand-50 py-16 px-4 rounded-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Recipe
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Discover delicious recipes from around the web.
          </p>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What would you like to cook?"
                  className="w-full px-4 py-3 rounded border-2 border-gray-300 focus:border-brand-400 focus:ring-1 focus:ring-brand-400 text-lg"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
              <button
                type="submit"
                disabled={!query.trim()}
                className="px-8 py-3 bg-brand-400 text-white font-bold rounded hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-brand-100">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Quick & Easy', icon: '⚡', searchTerm: 'quick easy recipes' },
              { name: 'Healthy', icon: '🥗', searchTerm: 'healthy recipes' },
              { name: 'Vegetarian', icon: '🥬', searchTerm: 'vegetarian recipes' },
              { name: 'Desserts', icon: '🍰', searchTerm: 'dessert recipes' }
            ].map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.searchTerm)}
                className="p-4 bg-white rounded-lg text-left group hover:shadow-md transition-shadow duration-200 border border-gray-200"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-400 transition-colors">
                  {category.name}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Searches */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-brand-100">Popular Searches</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Chicken Recipes',
              'Pasta Dishes',
              'Slow Cooker Meals',
              'Healthy Dinners',
              'Quick Lunches',
              'Weekend Brunch'
            ].map((term) => (
              <button
                key={term}
                onClick={() => handleCategoryClick(term)}
                className="p-4 text-left hover:bg-brand-50 rounded-lg transition-colors text-gray-700 hover:text-brand-400 font-medium"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;