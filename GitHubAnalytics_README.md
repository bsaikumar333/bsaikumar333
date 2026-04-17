# GitHub Analytics Dashboard Component

A premium, animated GitHub analytics dashboard built with React, Tailwind CSS, and Lucide icons. Perfect for developer portfolios and personal dashboards.

## 📦 Features

- ✨ **Animated Counters** - Smooth number animations on mount
- 🎨 **Dark Theme with Gradients** - Blue/Purple gradient accents
- 🔵 **Circular Progress Ring** - Visual streak representation
- 🎯 **Card-based Layout** - Responsive grid layout
- ✨ **Glow Effects** - Subtle hover animations
- 🌈 **Gradient Backgrounds** - Beautiful gradient text and backgrounds
- 📱 **Fully Responsive** - Works on all screen sizes
- 🎭 **Premium Feel** - Polished UI with attention to detail

## 🚀 Installation & Setup

### Prerequisites
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "lucide-react": "latest",
    "tailwindcss": "^3.0.0"
  }
}
```

### Install Dependencies
```bash
npm install react lucide-react tailwindcss postcss autoprefixer
```

### Tailwind Configuration

Add `GitHubAnalytics.jsx` to your Tailwind CSS template paths in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./GitHubAnalytics.jsx",  // Add this line
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#03050a',
        }
      }
    },
  },
  plugins: [],
}
```

## 📖 Usage

### Basic Implementation

```jsx
import GitHubAnalyticsDashboard from './GitHubAnalytics';

function App() {
  return (
    <div>
      <GitHubAnalyticsDashboard />
    </div>
  );
}

export default App;
```

### Using in a Full-Stack Project

```jsx
// pages/portfolio.jsx
import GitHubAnalyticsDashboard from '@/components/GitHubAnalytics';

export default function PortfolioPage() {
  return (
    <main>
      <section id="github-stats">
        <GitHubAnalyticsDashboard />
      </section>
    </main>
  );
}
```

## 🎨 Customization

### Modify Metrics
Edit the stats array to customize your data:

```jsx
const stats = [
  {
    icon: TrendingUp,
    label: 'Your Custom Label',
    value: 100,  // Change this
    gradient: 'from-blue-500 to-cyan-400',
    delay: 0,
  },
  // ... more stats
];
```

### Change Color Scheme
Modify gradient classes in the stats array or component:

```jsx
gradient: 'from-pink-500 to-red-400'  // Change to your preferred colors
```

Available Tailwind gradients:
- Blue-Cyan: `from-blue-500 to-cyan-400`
- Purple-Pink: `from-purple-500 to-pink-400`
- Green-Emerald: `from-green-500 to-emerald-400`
- Orange-Red: `from-orange-500 to-red-400`

### Customize Animation Duration
Modify the `duration` prop in `AnimatedCounter`:

```jsx
<AnimatedCounter endValue={value} duration={3000} /> // 3 seconds
```

### Adjust Streak Ring
Modify the `ProgressRing` component:

```jsx
<ProgressRing streak={5} maxStreak={365} />  // Change values
```

## 🔧 Component Breakdown

### 1. **AnimatedCounter**
Animates numbers from 0 to the target value using `requestAnimationFrame`.

```jsx
<AnimatedCounter endValue={96} duration={2000} />
```

### 2. **ProgressRing**
SVG-based circular progress indicator showing streak progress.

```jsx
<ProgressRing streak={3} maxStreak={365} />
```

### 3. **StatCard**
Reusable card component with icon, label, and value display.

```jsx
<StatCard 
  icon={TrendingUp}
  label="Total Contributions"
  value={96}
  gradient='from-blue-500 to-cyan-400'
  delay={0}
/>
```

### 4. **GitHubAnalyticsDashboard**
Main component combining all sub-components into a complete dashboard.

## 🎯 Icon Options (Lucide React)

Available icons (replace `TrendingUp`, `GitCommit`, etc.):

- `TrendingUp` - For contributions
- `GitCommit` - For commits
- `GitPullRequest` - For pull requests
- `Zap` - For streaks/activity
- `Target` - For goals
- `Award` - For achievements
- `Flame` - For active streaks
- `Code` - For code metrics

```jsx
import { TrendingUp, Code, Flame, Award } from 'lucide-react';
```

## 📱 Responsive Behavior

- **Mobile (< 768px)**: Single column layout
- **Tablet (768px - 1024px)**: 2-column grid
- **Desktop (> 1024px)**: 4-column grid

## 🌐 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## 🚀 Performance Tips

1. **Memoization**: Wrap component with `React.memo()` for optimization
```jsx
export default React.memo(GitHubAnalyticsDashboard);
```

2. **Lazy Loading**: Use React.lazy() for code splitting
```jsx
const GitHubAnalytics = React.lazy(() => import('./GitHubAnalytics'));
```

3. **Intersection Observer**: Only animate when component is visible
```jsx
const useInView = () => {
  // Implement IntersectionObserver logic
};
```

## 🎨 Example Customizations

### Dark Mode Toggle
```jsx
const [isDark, setIsDark] = useState(true);

return (
  <div className={isDark ? 'bg-slate-950' : 'bg-white'}>
    <GitHubAnalyticsDashboard />
  </div>
);
```

### Dynamic Data from API
```jsx
const [stats, setStats] = useState([]);

useEffect(() => {
  fetchGitHubStats().then(setStats);
}, []);

// Pass stats as props
```

### Export as Static Image
```jsx
import html2canvas from 'html2canvas';

const exportDashboard = async () => {
  const element = document.getElementById('analytics');
  const canvas = await html2canvas(element);
  // Download or share
};
```

## 📊 Integration with GitHub API

```jsx
import { useEffect, useState } from 'react';

const GitHubMetrics = ({ username }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [username]);

  return (
    <GitHubAnalyticsDashboard 
      contributions={data?.public_repos}
      followers={data?.followers}
    />
  );
};
```

## 🤝 Contributing

Feel free to customize and enhance this component for your portfolio!

## 📄 License

Open source - feel free to use in your projects.

## 💡 Tips for Portfolio

1. **Add to your portfolio website** for impressive GitHub stats display
2. **Embed in README** using iframe or static image export
3. **Share on LinkedIn** as a portfolio piece
4. **Use in DevCard** or developer portfolio platforms
5. **Showcase on Behance** for design credibility

---

Made with ❤️ for developers by developers. Happy coding! 🚀
