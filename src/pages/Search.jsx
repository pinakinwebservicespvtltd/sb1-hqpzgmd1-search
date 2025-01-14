import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);
  const resultsPerPage = 10;

  const popularCategories = [
    { name: 'Quick & Easy', icon: '⚡', searchTerm: 'quick easy recipes' },
    { name: 'Healthy', icon: '🥗', searchTerm: 'healthy recipes' },
    { name: 'Vegetarian', icon: '🥬', searchTerm: 'vegetarian recipes' },
    { name: 'Desserts', icon: '🍰', searchTerm: 'dessert recipes' }
  ];

  const popularSearches = [
    'Chicken Recipes',
    'Pasta Dishes',
    'Slow Cooker Meals',
    'Healthy Dinners',
    'Quick Lunches',
    'Weekend Brunch'
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchGoogle = async (page = 1) => {
    setLoading(true);
    setCurrentPage(page);
    setShowSuggestions(false);

    try {
      const startIndex = (page - 1) * resultsPerPage + 1;
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_SEARCH_ENGINE_ID}&q=${encodeURIComponent(query + " recipe")}&num=${resultsPerPage}&start=${startIndex}&imgSize=LARGE&fields=items(title,link,snippet,pagemap),searchInformation(totalResults)`
      );
      const data = await response.json();
      setResults(data.items || []);
      setTotalResults(parseInt(data.searchInformation?.totalResults) || 0);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const queryParam = searchParams.get('q');
    if (queryParam) {
      setQuery(queryParam);
      searchGoogle(1);
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
    }
  };

  const handleSuggestionClick = (searchTerm) => {
    setQuery(searchTerm);
    setSearchParams({ q: searchTerm });
    setShowSuggestions(false);
  };

  const getImageUrl = (result) => {
    if (!result.pagemap) return null;
    
    const image = result.pagemap?.cse_image?.[0]?.src ||
                 result.pagemap?.metatags?.[0]?.['og:image'] ||
                 result.pagemap?.metatags?.[0]?.['twitter:image'] ||
                 result.pagemap?.cse_thumbnail?.[0]?.src;
    
    try {
      return image ? new URL(image).toString() : null;
    } catch {
      return null;
    }
  };

  const totalPages = Math.min(Math.ceil(totalResults / resultsPerPage), 10);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button
          onClick={() => searchGoogle(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1 || loading}
          className="px-4 py-2 rounded-lg bg-brand-50 text-brand-400 disabled:opacity-50 hover:bg-brand-100 transition-colors duration-200"
        >
          Previous
        </button>
        
        <div className="flex items-center space-x-2">
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            const isCurrentPage = pageNumber === currentPage;
            
            return (
              <button
                key={pageNumber}
                onClick={() => searchGoogle(pageNumber)}
                disabled={loading}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200
                  ${isCurrentPage 
                    ? 'bg-brand-400 text-white' 
                    : 'bg-brand-50 text-brand-400 hover:bg-brand-100'
                  }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => searchGoogle(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages || loading}
          className="px-4 py-2 rounded-lg bg-brand-50 text-brand-400 disabled:opacity-50 hover:bg-brand-100 transition-colors duration-200"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Search Form */}
        <div className="mb-8 bg-brand-50 p-8 rounded-lg">
          <form onSubmit={handleSearch}>
            <div className="flex gap-2">
              <div className="relative flex-1" ref={suggestionsRef}>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
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
                
                {/* Search Suggestions */}
                {showSuggestions && (
                  <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
                    {/* Popular Categories */}
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-500 mb-3">Popular Categories</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {popularCategories.map((category) => (
                          <button
                            key={category.name}
                            onClick={() => handleSuggestionClick(category.searchTerm)}
                            className="flex items-center space-x-2 p-2 hover:bg-brand-50 rounded-md text-left w-full"
                          >
                            <span className="text-xl">{category.icon}</span>
                            <span className="text-gray-700">{category.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Popular Searches */}
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-500 mb-3">Popular Searches</h3>
                      <div className="space-y-2">
                        {popularSearches.map((term) => (
                          <button
                            key={term}
                            onClick={() => handleSuggestionClick(term)}
                            className="block w-full text-left p-2 hover:bg-brand-50 rounded-md text-gray-700"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="px-8 py-3 bg-brand-400 text-white font-bold rounded hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>
        </div>

        {/* Results Count */}
        {totalResults > 0 && (
          <p className="text-center text-gray-600 mb-8">
            Found {totalResults.toLocaleString()} recipes
          </p>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.map((result) => {
            const imageUrl = getImageUrl(result);
            return (
              <a 
                key={result.link}
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 flex flex-col h-full transform hover:-translate-y-1 overflow-hidden group"
              >
                {imageUrl && (
                  <div className="relative pt-[60%] overflow-hidden bg-gray-100">
                    <img 
                      src={imageUrl} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      onError={(e) => {
                        e.target.parentElement.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-400 transition-colors">
                    {result.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed flex-1">{result.snippet}</p>
                </div>
              </a>
            );
          })}
        </div>
        
        {/* Pagination */}
        {renderPagination()}
        
        {/* No Results Message */}
        {query && results.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No recipes found. Try a different search term.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Search;