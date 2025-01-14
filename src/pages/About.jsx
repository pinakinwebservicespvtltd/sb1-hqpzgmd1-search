import React from 'react';

function About() {
  return (
    <main className="flex-grow">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About Recipe Search</h1>
          <p className="text-lg text-gray-600">Discover the perfect recipe for any occasion</p>
        </div>

        <div className="prose prose-green max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Recipe Search is a specialized search engine dedicated to helping food enthusiasts, home cooks, and culinary professionals find the perfect recipes from across the web. We aggregate and index recipes from trusted sources to provide you with comprehensive search results for any dish or ingredient you're interested in.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Comprehensive recipe search across multiple trusted sources</li>
              <li>Quick access to detailed cooking instructions</li>
              <li>Filter options for dietary preferences and cooking time</li>
              <li>User-friendly interface for seamless recipe discovery</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 mb-6">
              Our search engine utilizes advanced algorithms to crawl and index recipe content from across the internet. We work with Google's Custom Search API to ensure high-quality, relevant results for every search query. Whether you're looking for quick weeknight dinners, special occasion recipes, or specific dietary options, our search engine helps you find exactly what you need.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-6">
              We are committed to providing a reliable, user-friendly platform that makes recipe discovery enjoyable and efficient. Our team continuously works to improve search algorithms and user experience to help you find the perfect recipe every time.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default About;