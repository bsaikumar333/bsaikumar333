// postcss.config.js
// PostCSS configuration for Tailwind CSS processing

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

/**
 * This file is required for Tailwind CSS to work properly.
 * It processes Tailwind directives and applies vendor prefixes automatically.
 * 
 * 📝 What each plugin does:
 * 
 * 1. tailwindcss: 
 *    - Processes @tailwind directives
 *    - Generates utility classes
 *    - Applies theme configuration
 * 
 * 2. autoprefixer:
 *    - Adds vendor prefixes for cross-browser support
 *    - Example: -webkit-, -moz-, -ms- prefixes
 * 
 * Installation:
 * npm install -D tailwindcss postcss autoprefixer
 * 
 * Then run:
 * npx tailwindcss init -p
 */
