import React from 'react';

function Terms() {
  return (
    <main className="flex-grow">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-green max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">By accessing and using Recipe Search, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our service.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-600 mb-4">Recipe Search is a search engine that helps users find recipes from various sources across the internet. We do not host recipes directly but provide links to third-party websites. Our service includes:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Recipe search functionality</li>
              <li>Recipe discovery tools</li>
              <li>Links to third-party recipe websites</li>
              <li>Search result filtering and organization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">Users must:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Use the service legally and responsibly</li>
              <li>Not attempt to disrupt or damage the service</li>
              <li>Not use automated systems without explicit permission</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to gain unauthorized access</li>
              <li>Not use the service for spam or harassment</li>
              <li>Not collect user data without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">All content and functionality on Recipe Search is protected by copyright and other intellectual property laws. This includes:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Website design and interface</li>
              <li>Software and code</li>
              <li>Logos and branding</li>
              <li>Search algorithms</li>
              <li>Documentation and text content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Content</h2>
            <p className="text-gray-600 mb-4">We provide links to third-party websites and content. We:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Do not endorse third-party content</li>
              <li>Are not responsible for third-party content accuracy</li>
              <li>Do not guarantee recipe quality or safety</li>
              <li>Recommend users verify recipe information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-4">Recipe Search is provided "as is" without warranties. We do not guarantee:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Uninterrupted service</li>
              <li>Error-free operation</li>
              <li>Completeness of search results</li>
              <li>Accuracy of third-party content</li>
              <li>Suitability for specific purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">Recipe Search shall not be liable for:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Direct or indirect damages</li>
              <li>Loss of data or profits</li>
              <li>Service interruptions</li>
              <li>Third-party content</li>
              <li>User-generated content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications to Service</h2>
            <p className="text-gray-600 mb-4">We reserve the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Modify or discontinue features</li>
              <li>Update these terms</li>
              <li>Change service functionality</li>
              <li>Adjust or remove content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
            <p className="text-gray-600 mb-4">These terms are governed by applicable laws. Any disputes shall be resolved in the appropriate jurisdiction.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact</h2>
            <p className="text-gray-600">For questions about these terms, please contact us at info@trackful.org</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Terms;