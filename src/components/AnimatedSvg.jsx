import React from 'react';

export const HeroGraphic = () => {
  return (
    <svg
      className="svg-graphic"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer abstract decorative circle */}
      <circle cx="250" cy="250" r="220" stroke="url(#hero-ring-grad)" strokeWidth="2" strokeDasharray="10 15" opacity="0.3" />
      <circle cx="250" cy="250" r="190" stroke="url(#hero-ring-grad)" strokeWidth="1" opacity="0.1" />

      {/* Decorative floating grids */}
      <g opacity="0.25">
        <line x1="50" y1="120" x2="150" y2="120" stroke="#60a5fa" strokeWidth="1" />
        <line x1="50" y1="140" x2="120" y2="140" stroke="#60a5fa" strokeWidth="1" />
        <line x1="50" y1="160" x2="180" y2="160" stroke="#60a5fa" strokeWidth="1" />
      </g>

      {/* Main Terminal Frame */}
      <rect x="70" y="90" width="360" height="260" rx="16" fill="#1e293b" stroke="#334155" strokeWidth="3" />
      
      {/* Terminal Title Bar */}
      <rect x="70" y="90" width="360" height="40" rx="16" fill="#0f172a" />
      {/* Cover lower rx of title bar */}
      <rect x="70" y="110" width="360" height="20" fill="#0f172a" />
      
      {/* Title Bar Buttons */}
      <circle cx="100" cy="110" r="6" fill="#ef4444" />
      <circle cx="120" cy="110" r="6" fill="#eab308" />
      <circle cx="140" cy="110" r="6" fill="#22c55e" />
      
      {/* Terminal text */}
      <text x="170" y="115" fill="#64748b" fontSize="12" fontFamily="monospace" fontWeight="600">bash - quality_assurance.py</text>

      {/* Terminal Content */}
      <g fontFamily="monospace" fontSize="13" fill="#e2e8f0" transform="translate(90, 160)">
        <text x="0" y="0" fill="#3b82f6">$ python -m pytest tests/</text>
        
        <text x="0" y="25" fill="#94a3b8">platform linux -- Python 3.10.2</text>
        <text x="0" y="45" fill="#94a3b8">plugins: selenium-4.2.0, xdist-2.5.0</text>
        
        <text x="0" y="75" fill="#f43f5e">tests/test_ui.py::test_login</text>
        <text x="240" y="75" fill="#10b981">PASSED [ 33%]</text>
        
        <text x="0" y="95" fill="#f43f5e">tests/test_api.py::test_create_user</text>
        <text x="240" y="95" fill="#10b981">PASSED [ 66%]</text>

        <text x="0" y="115" fill="#f43f5e">tests/test_devops.py::test_infra</text>
        <text x="240" y="115" fill="#10b981">PASSED [100%]</text>

        <text x="0" y="150" fill="#10b981" fontWeight="700">======= 3 passed in 1.48s =======</text>
      </g>

      {/* Floating Automation/DevOps Icons */}
      <g transform="translate(360, 270)">
        <circle cx="40" cy="40" r="45" fill="url(#circle-shadow-grad)" />
        <circle cx="40" cy="40" r="30" fill="#1e1e1e" stroke="#22c55e" strokeWidth="2.5" />
        {/* Pass Checkmark Icon inside the floating bubble */}
        <path d="M30 40L37 47L50 32" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g transform="translate(20, 260)">
        <circle cx="40" cy="40" r="45" fill="url(#circle-shadow-grad)" />
        <circle cx="40" cy="40" r="30" fill="#1e1e1e" stroke="#60a5fa" strokeWidth="2.5" />
        {/* Code tag icon </> */}
        <path d="M28 35L20 40L28 45" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 35L60 40L52 45" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M43 32L37 48" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Definitions */}
      <defs>
        <linearGradient id="hero-ring-grad" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="0.5" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
        <radialGradient id="circle-shadow-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0b0f19" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0b0f19" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const AboutGraphic = () => {
  return (
    <svg
      className="svg-graphic"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background radial glow */}
      <circle cx="250" cy="250" r="160" fill="url(#about-glow)" opacity="0.15" />

      {/* Dynamic orbital rings */}
      <circle cx="250" cy="250" r="170" stroke="#334155" strokeWidth="1.5" strokeDasharray="5 8" />
      <circle cx="250" cy="250" r="120" stroke="#475569" strokeWidth="1" />
      <circle cx="250" cy="250" r="70" stroke="#64748b" strokeWidth="2" strokeDasharray="15 30" />

      {/* Connection paths */}
      <path d="M250 250L130 130" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M250 250L370 130" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M250 250L250 390" stroke="#2563eb" strokeWidth="2" />
      <path d="M250 250L110 310" stroke="#2563eb" strokeWidth="2" />
      <path d="M250 250L390 310" stroke="#2563eb" strokeWidth="2" />

      {/* Core Center Node: Quality Check */}
      <circle cx="250" cy="250" r="45" fill="url(#core-grad)" stroke="#60a5fa" strokeWidth="3" />
      {/* Shield Icon in the middle */}
      <path d="M250 232L265 237V248C265 257 250 263 250 263C250 263 235 257 235 248V237L250 232Z" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Node 1: DevOps Container (Docker/Kubernetes symbol) */}
      <g transform="translate(130, 130)">
        <circle cx="0" cy="0" r="30" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <rect x="-12" y="-12" width="24" height="24" rx="4" stroke="#38bdf8" strokeWidth="2" fill="none" />
        <line x1="-12" y1="0" x2="12" y2="0" stroke="#38bdf8" strokeWidth="1.5" />
        <line x1="0" y1="-12" x2="0" y2="12" stroke="#38bdf8" strokeWidth="1.5" />
      </g>
      <text x="130" y="175" fill="#f8fafc" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">DevOps</text>

      {/* Node 2: Test Automation (Selenium/Automation gears) */}
      <g transform="translate(370, 130)">
        <circle cx="0" cy="0" r="30" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        {/* Simple gears graphic */}
        <circle cx="0" cy="0" r="10" stroke="#10b981" strokeWidth="2.5" fill="none" />
        <path d="M0 -15V-10M0 10V15M-15 0H-10M10 0H15M-10.6 -10.6L-7 -7M7 7L10.6 10.6M-10.6 10.6L-7 7M7 -7L10.6 -10.6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      </g>
      <text x="370" y="175" fill="#f8fafc" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Testing</text>

      {/* Node 3: Database / Infrastructure */}
      <g transform="translate(250, 390)">
        <circle cx="0" cy="0" r="30" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
        {/* Server layers */}
        <rect x="-14" y="-12" width="28" height="6" rx="1.5" fill="none" stroke="#a855f7" strokeWidth="1.5" />
        <rect x="-14" y="-3" width="28" height="6" rx="1.5" fill="none" stroke="#a855f7" strokeWidth="1.5" />
        <rect x="-14" y="6" width="28" height="6" rx="1.5" fill="none" stroke="#a855f7" strokeWidth="1.5" />
        <circle cx="-8" cy="-9" r="1" fill="#a855f7" />
        <circle cx="-8" cy="0" r="1" fill="#a855f7" />
        <circle cx="-8" cy="9" r="1" fill="#a855f7" />
      </g>
      <text x="250" y="435" fill="#f8fafc" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Infrastructure</text>

      {/* Node 4: Continuous Delivery (CI/CD loop) */}
      <g transform="translate(110, 310)">
        <circle cx="0" cy="0" r="30" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        {/* Infinity loop / arrow */}
        <path d="M-14 -6C-2 -6 2 6 14 6C20 6 22 0 14 -6C2 -6 -2 6 -14 6C-20 6 -22 0 -14 -6Z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
      <text x="110" y="355" fill="#f8fafc" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">CI / CD</text>

      {/* Node 5: Cloud Networking */}
      <g transform="translate(390, 310)">
        <circle cx="0" cy="0" r="30" fill="#1e293b" stroke="#ec4899" strokeWidth="2" />
        {/* Cloud icon */}
        <path d="M-10 6C-10 6 -14 6 -14 2C-14 -2 -10 -2 -10 -2C-10 -2 -10 -8 -4 -8C2 -8 4 -4 4 -4C4 -4 10 -4 10 1C10 6 4 6 4 6H-10Z" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
      <text x="390" y="355" fill="#f8fafc" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Cloud</text>

      {/* Definitions */}
      <defs>
        <radialGradient id="about-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0b0f19" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="core-grad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
    </svg>
  );
};
