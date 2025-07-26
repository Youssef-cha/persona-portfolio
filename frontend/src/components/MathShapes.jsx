import React from 'react';

const MathShapes = ({ className = '', size = 'medium', animated = true }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12', 
    large: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const Triangle = ({ color = 'blue-400', opacity = '30' }) => (
    <div className={`w-0 h-0 border-l-8 border-r-8 border-b-14 border-l-transparent border-r-transparent border-b-${color}/${opacity} ${animated ? 'animate-pulse' : ''}`}></div>
  );

  const Pentagon = ({ color = 'purple-400', opacity = '20' }) => (
    <svg className={`${sizeClasses[size]} ${animated ? 'animate-spin-slow' : ''}`} viewBox="0 0 100 100">
      <polygon 
        points="50,5 90,35 75,85 25,85 10,35" 
        fill={`rgba(139, 92, 246, 0.${opacity})`}
        stroke={`rgba(139, 92, 246, 0.5)`}
        strokeWidth="2"
      />
    </svg>
  );

  const Hexagon = ({ color = 'emerald-400', opacity = '25' }) => (
    <svg className={`${sizeClasses[size]} ${animated ? 'animate-bounce' : ''}`} viewBox="0 0 100 100">
      <polygon 
        points="25,10 75,10 90,50 75,90 25,90 10,50" 
        fill={`rgba(16, 185, 129, 0.${opacity})`}
        stroke={`rgba(16, 185, 129, 0.6)`}
        strokeWidth="2"
      />
    </svg>
  );

  const Octagon = ({ color = 'orange-400', opacity = '20' }) => (
    <svg className={`${sizeClasses[size]} ${animated ? 'animate-spin-reverse' : ''}`} viewBox="0 0 100 100">
      <polygon 
        points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" 
        fill={`rgba(251, 146, 60, 0.${opacity})`}
        stroke={`rgba(251, 146, 60, 0.5)`}
        strokeWidth="2"
      />
    </svg>
  );

  const Circle = ({ color = 'pink-400', opacity = '30' }) => (
    <div className={`${sizeClasses[size]} rounded-full border-4 border-${color}/${opacity} ${animated ? 'animate-pulse' : ''}`}></div>
  );

  const Square = ({ color = 'indigo-400', opacity = '25' }) => (
    <div className={`${sizeClasses[size]} border-4 border-${color}/${opacity} rotate-45 ${animated ? 'animate-spin-slow' : ''}`}></div>
  );

  const Star = ({ color = 'yellow-400', opacity = '35' }) => (
    <svg className={`${sizeClasses[size]} ${animated ? 'animate-twinkle' : ''}`} viewBox="0 0 100 100">
      <polygon 
        points="50,5 58,35 88,35 65,55 73,85 50,70 27,85 35,55 12,35 42,35" 
        fill={`rgba(245, 158, 11, 0.${opacity})`}
        stroke={`rgba(245, 158, 11, 0.6)`}
        strokeWidth="2"
      />
    </svg>
  );

  const Rhombus = ({ color = 'teal-400', opacity = '25' }) => (
    <div className={`${sizeClasses[size]} bg-${color}/${opacity} transform rotate-45 ${animated ? 'animate-wiggle' : ''}`}></div>
  );

  const Parallelogram = ({ color = 'red-400', opacity = '20' }) => (
    <svg className={`${sizeClasses[size]} ${animated ? 'animate-slide' : ''}`} viewBox="0 0 100 100">
      <polygon 
        points="20,20 80,20 70,80 10,80" 
        fill={`rgba(239, 68, 68, 0.${opacity})`}
        stroke={`rgba(239, 68, 68, 0.5)`}
        strokeWidth="2"
      />
    </svg>
  );

  const Trapezoid = ({ color = 'cyan-400', opacity = '30' }) => (
    <svg className={`${sizeClasses[size]} ${animated ? 'animate-float' : ''}`} viewBox="0 0 100 100">
      <polygon 
        points="30,20 70,20 80,80 20,80" 
        fill={`rgba(34, 211, 238, 0.${opacity})`}
        stroke={`rgba(34, 211, 238, 0.5)`}
        strokeWidth="2"
      />
    </svg>
  );

  return (
    <div className={`math-shapes ${className}`}>
      <Triangle />
      <Pentagon />
      <Hexagon />
      <Octagon />
      <Circle />
      <Square />
      <Star />
      <Rhombus />
      <Parallelogram />
      <Trapezoid />
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(45deg); }
          25% { transform: rotate(50deg); }
          75% { transform: rotate(40deg); }
        }
        
        @keyframes slide {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(5px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 3s ease-in-out infinite;
        }
        
        .animate-slide {
          animation: slide 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .border-l-8 { border-left-width: 8px; }
        .border-r-8 { border-right-width: 8px; }
        .border-b-14 { border-bottom-width: 14px; }
      `}</style>
    </div>
  );
};

const MathShapesBackground = ({ density = 'medium', className = '' }) => {
  const shapes = [
    { component: 'triangle', color: 'blue-400', opacity: '20' },
    { component: 'pentagon', color: 'purple-400', opacity: '15' },
    { component: 'hexagon', color: 'emerald-400', opacity: '25' },
    { component: 'octagon', color: 'orange-400', opacity: '20' },
    { component: 'circle', color: 'pink-400', opacity: '30' },
    { component: 'square', color: 'indigo-400', opacity: '25' },
    { component: 'star', color: 'yellow-400', opacity: '35' },
    { component: 'rhombus', color: 'teal-400', opacity: '25' }
  ];

  const densityCount = {
    low: 8,
    medium: 15,
    high: 25
  };

  const generateShapes = () => {
    const count = densityCount[density] || 15;
    return Array.from({ length: count }, (_, i) => {
      const shape = shapes[i % shapes.length];
      return {
        ...shape,
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)],
        delay: Math.random() * 5
      };
    });
  };

  const generatedShapes = generateShapes();

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {generatedShapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            animationDelay: `${shape.delay}s`
          }}
        >
          <MathShapes size={shape.size} />
        </div>
      ))}
    </div>
  );
};

const InteractiveMathShapes = ({ onShapeClick, className = '' }) => {
  const interactiveShapes = [
    { name: 'Triangle', sides: 3, formula: 'Aire = (base × hauteur) / 2' },
    { name: 'Carré', sides: 4, formula: 'Aire = côté²' },
    { name: 'Pentagone', sides: 5, formula: 'Aire = (périmètre × apothème) / 2' },
    { name: 'Hexagone', sides: 6, formula: 'Aire = 3√3 × côté² / 2' },
    { name: 'Cercle', sides: '∞', formula: 'Aire = π × rayon²' }
  ];

  return (
    <div className={`grid grid-cols-5 gap-4 ${className}`}>
      {interactiveShapes.map((shape, index) => (
        <div
          key={shape.name}
          onClick={() => onShapeClick && onShapeClick(shape)}
          className="group cursor-pointer p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 interactive"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <MathShapes size="large" animated={false} />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">{shape.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{shape.sides} côtés</p>
            <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
              {shape.formula}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { MathShapes, MathShapesBackground, InteractiveMathShapes };