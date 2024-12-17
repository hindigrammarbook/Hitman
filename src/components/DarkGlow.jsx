// src/components/DarkGlow.jsx
import React, { useState, useEffect } from 'react';

const DarkGlow = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [shouldShowGlow, setShouldShowGlow] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const hasParentDarkClass = element.closest('.dark-bg') !== null;
        setShouldShowGlow(hasParentDarkClass);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {children}
      {shouldShowGlow && (
        <>
          {/* Reduced from w-96/h-96 to w-48/h-48 */}
          <div
            className="pointer-events-none fixed rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl w-48 h-48"
            style={{
              left: mousePosition.x - 96,  // Adjusted from 192 to 96
              top: mousePosition.y - 96,
            }}
          />
          {/* Reduced from w-64/h-64 to w-32/h-32 */}
          <div
            className="pointer-events-none fixed rounded-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-xl w-32 h-32"
            style={{
              left: mousePosition.x - 64,  // Adjusted from 128 to 64
              top: mousePosition.y - 64,
            }}
          />
          {/* Reduced from w-32/h-32 to w-16/h-16 */}
          <div
            className="pointer-events-none fixed rounded-full bg-gradient-to-r from-blue-300/40 via-purple-300/40 to-pink-300/40 blur-lg w-16 h-16"
            style={{
              left: mousePosition.x - 32,  // Adjusted from 64 to 32
              top: mousePosition.y - 32,
            }}
          />
          {/* Kept the cursor dot the same size */}
          <div
            className="pointer-events-none fixed rounded-full bg-white/80 w-4 h-4"
            style={{
              left: mousePosition.x - 8,
              top: mousePosition.y - 8,
              filter: 'blur(2px)',
            }}
          />
        </>
      )}
    </>
  );
};

export default DarkGlow;