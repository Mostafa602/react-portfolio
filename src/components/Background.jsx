import React, { useEffect, useState } from 'react';

export default function Background() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 -z-10 h-full w-full overflow-hidden" style={{ background: 'linear-gradient(to bottom ,rgb(0, 25, 94),rgb(0, 0, 0))' }}>
      <div
        className="pointer-events-none absolute rounded-full bg-blue-600 opacity-10 blur-3xl "
        style={{
          top: position.y - 100,
          left: position.x - 100,
          width: 200,
          height: 200,
        }}
      ></div>
    </div>
  );
}
