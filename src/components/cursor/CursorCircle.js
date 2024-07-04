import React, { useEffect, useRef } from 'react';
import '../cursor/CursorCircle.css';

const CursorCircle = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const moveCircle = (e) => {
      const circle = circleRef.current;
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    };

    const handleMouseEnter = () => {
      circleRef.current.classList.add('hover');
    };

    const handleMouseLeave = () => {
      circleRef.current.classList.remove('hover');
    };

    document.addEventListener('mousemove', moveCircle);
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCircle);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div ref={circleRef} className="cursor-circle" />;
};

export default CursorCircle;
