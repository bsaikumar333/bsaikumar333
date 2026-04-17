import React, { useState, useEffect } from 'react';
import { TrendingUp, GitCommit, GitPullRequest, Zap, Target } from 'lucide-react';

// Animated Counter Component
const AnimatedCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animationFrame = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(endValue * progress));
      
      if (progress < 1) {
        requestAnimationFrame(animationFrame);
      } else {
        setCount(endValue);
      }
    };
    
    requestAnimationFrame(animationFrame);
  }, [endValue, duration]);

  return <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{count.toLocaleString()}</span>;
};

// Circular Progress Ring Component
const ProgressRing = ({ streak, maxStreak = 365 }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (streak / maxStreak) * circumference;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg className="absolute transform -rotate-90" width="140" height="140">
        {/* Background circle */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="8"
          fill="none"
        />
        {/* Progress circle with gradient */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-center z-10">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          {streak}
        </div>
        <div className="text-xs text-gray-400 mt-1">days</div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon: Icon, label, value, delay = 0, gradient = 'from-blue-500 to-cyan-400' }) => {
  return (
    <div
      className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-pink-600/10 transition-all duration-300 rounded-xl" />

      {/* Icon Background Gradient */}
      <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

      {/* Content */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-2">{label}</p>
          <p className="text-4xl font-bold">
            {typeof value === 'number' ? <AnimatedCounter endValue={value} /> : value}
          </p>
        </div>
        <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient} text-white shadow-lg`}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
    </div>
  );
};

// Main Dashboard Component
export default function GitHubAnalyticsDashboard() {
  const stats = [
    {
      icon: TrendingUp,
      label: 'Total Contributions',
      value: 96,
      gradient: 'from-blue-500 to-cyan-400',
      delay: 0,
    },
    {
      icon: GitCommit,
      label: 'Total Commits (2025)',
      value: 79,
      gradient: 'from-purple-500 to-pink-400',
      delay: 100,
    },
    {
      icon: GitPullRequest,
      label: 'Pull Requests',
      value: 5,
      gradient: 'from-green-500 to-emerald-400',
      delay: 200,
    },
    {
      icon: Zap,
      label: 'Longest Streak',
      value: 3,
      gradient: 'from-orange-500 to-red-400',
      delay: 300,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8 flex items-center justify-center">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <Target size={24} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            GitHub Analytics
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mt-2">
              Developer Insights
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            2025 GitHub activity and contribution metrics dashboard showcasing development journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Streak Section */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 p-10 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 hover:from-purple-600/10 hover:via-purple-600/5 hover:to-pink-600/10 transition-all duration-300" />

          {/* Background gradient orbs */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-5" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 opacity-5" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Left Content */}
              <div className="mb-8 lg:mb-0 flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">Current Streak</h2>
                <p className="text-gray-400 text-lg mb-6 max-w-md">
                  Maintained consistent development activity and contributions over the past several days. Keep the momentum going! 🔥
                </p>
                <div className="flex gap-4">
                  <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 px-4 py-3 rounded-lg border border-cyan-400/30">
                    <p className="text-xs text-gray-400 mb-1">Current</p>
                    <p className="text-2xl font-bold text-cyan-400">3 days</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-400/20 to-red-500/20 px-4 py-3 rounded-lg border border-orange-400/30">
                    <p className="text-xs text-gray-400 mb-1">Personal Best</p>
                    <p className="text-2xl font-bold text-orange-400">3 days</p>
                  </div>
                </div>
              </div>

              {/* Progress Ring */}
              <div className="flex-1 flex justify-center">
                <ProgressRing streak={3} maxStreak={365} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Repos', value: '15+' },
            { label: 'Followers', value: 'Growing' },
            { label: 'Active', value: 'Yes ✓' },
            { label: 'Learning', value: 'Daily' },
          ].map((item, index) => (
            <div
              key={index}
              className="group text-center p-4 rounded-lg bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-slate-800/50 hover:to-slate-900/50 transition-all duration-300 cursor-pointer"
            >
              <p className="text-gray-400 text-sm">{item.label}</p>
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:from-pink-400 group-hover:to-purple-500 transition-all duration-300">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
