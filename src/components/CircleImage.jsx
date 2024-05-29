import React from 'react';

const CircularGraphic = () => {
  return (
    <div style={{ display: 'block', justifyContent: 'center', alignItems: 'center', height: '100vh' ,position:'absolute', top:'300px'}}>
      <svg width="500" height="500" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3, 0 5" fill="#333" />
          </marker>
        </defs>
        <circle cx="150" cy="150" r="100" stroke="black" strokeWidth="2" fill="none" />
        <path d="M 30 200 A 110 110 0 0 1 270 100" fill="none" stroke="#999" strokeWidth="5" markerEnd="url(#arrowhead)" className="rotate" />
        <path d="M 270 100 A 110 110 0 0 1 30 200" fill="none" stroke="#555" strokeWidth="5" markerEnd="url(#arrowhead)" className="rotate" />
        <text x="50%" y="45%" textAnchor="middle" dy="0" fontSize="20" fontWeight="bold" fill="#333">
          Corporate
          <tspan x="50%" dy="1.2em">Cybersecurity</tspan>
          <tspan x="50%" dy="1.2em">Risk</tspan>
        </text>
        <style>
          {`
            .rotate {
              animation: rotate 5s linear infinite;
            }

            @keyframes rotate {
              from {
                transform: rotate(0deg);
                transform-origin: 150px 150px;
              }
              to {
                transform: rotate(360deg);
                transform-origin: 150px 150px;
              }
            }
          `}
        </style>
      </svg>
    </div>
  );
};

export default CircularGraphic;
