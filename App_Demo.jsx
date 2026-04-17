import React from 'react';
import GitHubAnalyticsDashboard from './GitHubAnalytics';

/**
 * Demo Application for GitHub Analytics Dashboard
 * 
 * This is a minimal setup to run the GitHub Analytics Dashboard component.
 * 
 * Prerequisites:
 * - npm install react lucide-react tailwindcss
 * - Configure Tailwind CSS in your project
 * 
 * Run with:
 * - npm start (for Create React App)
 * - npm run dev (for Vite)
 */

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* GitHub Analytics Dashboard */}
      <GitHubAnalyticsDashboard />

      {/* Optional: Additional sections */}
      <footer className="text-center py-8 text-gray-500 border-t border-slate-700">
        <p>GitHub Analytics Dashboard • Built with React & Tailwind CSS</p>
        <p className="mt-2 text-sm">
          Customize metrics in GitHubAnalytics.jsx to match your real-time GitHub stats
        </p>
      </footer>
    </main>
  );
}

/**
 * 🎨 CUSTOMIZATION EXAMPLES
 * 
 * 1. Change Animation Speed:
 *    Find: <AnimatedCounter endValue={value} />
 *    Change to: <AnimatedCounter endValue={value} duration={3000} />
 * 
 * 2. Customize Colors:
 *    Find: gradient: 'from-blue-500 to-cyan-400'
 *    Change to: gradient: 'from-pink-500 to-red-400'
 * 
 * 3. Add More Stats:
 *    Edit the stats array in GitHubAnalytics.jsx and add new items
 * 
 * 4. Change Streak Days:
 *    Find: <ProgressRing streak={3} />
 *    Change to: <ProgressRing streak={7} />
 * 
 * 5. Modify Layout:
 *    Grid classes: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
 *    Change to: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
 */

/**
 * 🚀 USAGE GUIDE
 * 
 * Step 1: Copy GitHubAnalytics.jsx to your src/components folder
 * Step 2: Import in your main component
 * Step 3: Add Tailwind CSS configuration
 * Step 4: Customize metrics and colors
 * Step 5: Deploy and showcase!
 */
