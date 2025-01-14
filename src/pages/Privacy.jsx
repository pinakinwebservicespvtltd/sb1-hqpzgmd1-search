import React from 'react';

function Privacy() {
  return (
    <main className="flex-grow">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-green max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">When you use our recipe search engine, we collect:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Search queries and search history</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device information (type, model, screen size)</li>
              <li>IP address and general location data</li>
              <li>Cookie and local storage data</li>
              <li>Usage patterns and preferences</li>
              <li>Referral source</li>
            </ul>
            <p className="text-gray-600 mb-4">We collect this information through:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Direct user input (searches, preferences)</li>
              <li>Automated data collection (cookies, analytics)</li>
              <li>Third-party services (search APIs, analytics providers)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide relevant recipe search results</li>
              <li>Improve our search algorithms and relevance</li>
              <li>Analyze user behavior and preferences</li>
              <li>Maintain service security and prevent abuse</li>
              <li>Optimize website performance</li>
              <li>Develop new features based on user patterns</li>
              <li>Generate anonymous usage statistics</li>
              <li>Debug technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookie Policy</h2>
            <p className="text-gray-600 mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Remember your preferences</li>
              <li>Analyze site traffic and usage</li>
              <li>Improve search functionality</li>
              <li>Maintain security</li>
            </ul>
            <p className="text-gray-600 mb-4">You can control cookie preferences through your browser settings.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Third Parties</h2>
            <p className="text-gray-600 mb-4">We share data with:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Service providers who assist our operations</li>
              <li>Analytics providers (with anonymized data)</li>
              <li>Search API providers</li>
              <li>Law enforcement when required by law</li>
              <li>Third parties with your explicit consent</li>
            </ul>
            <p className="text-gray-600 mb-4">We implement strict data protection requirements for all third parties.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">We protect your data through:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Encryption in transit and at rest</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
              <li>Monitoring and logging</li>
              <li>Regular security updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Opt-out of data collection</li>
              <li>Update your information</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-600 mb-4">Our service is not directed at children under 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Privacy Policy</h2>
            <p className="text-gray-600 mb-4">We may update this policy periodically. We will notify users of significant changes through our website or email.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600">For privacy-related inquiries, please contact us at info@trackful.org</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Privacy;