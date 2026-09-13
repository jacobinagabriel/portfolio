import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SalesDemo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-accent hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </button>

        <div className="bg-surface rounded-lg p-6 shadow-xl">
          <h1 className="text-3xl font-bold text-white mb-6">Sales Performance Dashboard</h1>
          
          <div className="aspect-video w-full bg-raised rounded-lg overflow-hidden mb-8">
            <iframe
              src="https://datastudio.google.com/embed/reporting/1234567890/page/1"
              className="w-full h-full border-0"
              title="Sales Performance Dashboard"
            />
          </div>

          <div className="space-y-6 text-parchment">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Overview</h2>
              <p>
                This interactive dashboard provides real-time insights into our sales performance metrics.
                Users can filter data by date range, product category, and region to analyze specific trends
                and patterns in sales data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time sales metrics and KPIs</li>
                <li>Interactive filters and drill-down capabilities</li>
                <li>Regional sales performance comparison</li>
                <li>Product category analysis</li>
                <li>Year-over-year growth tracking</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-ember/25 text-ember-light rounded-full text-sm">Tableau</span>
                <span className="px-3 py-1 bg-ember/25 text-ember-light rounded-full text-sm">SQL</span>
                <span className="px-3 py-1 bg-ember/25 text-ember-light rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-ember/25 text-ember-light rounded-full text-sm">Data Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDemo;