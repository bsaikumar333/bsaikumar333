// tailwind.config.js
// Complete Tailwind CSS configuration for GitHub Analytics Dashboard

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./GitHubAnalytics.jsx",
    "./App_Demo.jsx",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          // Add custom slate colors
          950: '#03050a',
          915: '#0a0f1a',
          905: '#0f141f',
        },
      },
      backgroundImage: {
        // Gradient badges
        'gradient-cyan-purple': 'linear-gradient(135deg, #06b6d4, #a855f7)',
        'gradient-blue-cyan': 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
        'gradient-purple-pink': 'linear-gradient(135deg, #a855f7, #ec4899)',
      },
      boxShadow: {
        // Custom glowing shadow effects
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.3)',
      },
      animation: {
        // Custom animations
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 10px rgba(168, 85, 247, 0.2)',
          },
        },
      },
      spacing: {
        // Custom spacing
      },
      fontSize: {
        // Custom font sizes if needed
      },
    },
  },
  plugins: [
    // Optional plugins
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}

/**
 * 📝 Configuration Explanation
 * 
 * 1. content: Specifies files where Tailwind should scan for class names
 * 2. theme.extend.colors: Adds custom color values
 * 3. theme.extend.backgroundImage: Preset gradients for reuse
 * 4. theme.extend.boxShadow: Custom shadow effects for glow
 * 5. theme.extend.animation: Custom animation keyframes
 * 6. plugins: Optional Tailwind plugins for extended functionality
 * 
 * 🎨 Usage Examples:
 * 
 * - Class: "bg-gradient-cyan-purple" → Uses gradient background
 * - Class: "shadow-glow-purple" → Adds glowing shadow
 * - Class: "animate-pulse-slow" → Slow pulsing animation
 * - Class: "bg-slate-950" → Darkest custom slate color
 */
