import React, { useRef, useEffect } from 'react';

import lavoro1 from '../assets/lavori/lavoro1.webp';
import lavoro2 from '../assets/lavori/lavoro2.jpeg';
import lavoro3 from '../assets/lavori/lavoro3.jpg';
import lavoro4 from '../assets/lavori/lavoro4.webp';
import lavoro5 from '../assets/lavori/lavoro5.jpg';
import lavoro6 from '../assets/lavori/lavoro6.jpg';
import lavoro7 from '../assets/lavori/lavoro7.jpg';
import lavoro8 from '../assets/lavori/lavoro8.jpg';
import lavoro9 from '../assets/lavori/lavoro9.jpg';
import lavoro10 from '../assets/lavori/lavoro10.jpg';
import lavoro11 from '../assets/lavori/lavoro11.jpg';
import lavoro12 from '../assets/lavori/lavoro12.jpg';
import lavoro13 from '../assets/lavori/lavoro13.jpg';
import lavoro14 from '../assets/lavori/lavoro14.jpg';
import lavoro15 from '../assets/lavori/lavoro15.jpg';
import lavoro16 from '../assets/lavori/lavoro16.jpg';
import lavoro17 from '../assets/lavori/lavoro17.jpg';
import lavoro18 from '../assets/lavori/lavoro18.jpg';
import lavoro19 from '../assets/lavori/lavoro19.jpg';
import lavoro20 from '../assets/lavori/lavoro20.jpg';
import lavoro21 from '../assets/lavori/lavoro21.jpg';
import lavoro22 from '../assets/lavori/lavoro22.jpg';
import lavoro23 from '../assets/lavori/lavoro23.jpg';
import lavoro24 from '../assets/lavori/lavoro24.jpg';
import lavoro25 from '../assets/lavori/lavoro25.jpg';
import lavoro26 from '../assets/lavori/lavoro26.jpg';
import lavoro27 from '../assets/lavori/lavoro27.jpg';
import lavoro28 from '../assets/lavori/lavoro28.jpg';

const works = [
  lavoro1, lavoro2, lavoro3, lavoro4, lavoro5, lavoro6, lavoro7, lavoro8,
  lavoro9, lavoro10, lavoro11, lavoro12, lavoro13, lavoro14, lavoro15, lavoro16,
  lavoro17, lavoro18, lavoro19, lavoro20, lavoro21, lavoro22, lavoro23, lavoro24,
  lavoro25, lavoro26, lavoro27, lavoro28
];

// Duplica per loop seamless
const allWorks = [...works, ...works];

const ITEM_WIDTH = 160; // px (w-40)
const GAP = 12;         // px (gap-3)
const SPEED = 2;      // px per frame → ~90px/sec a 60fps

const WorksCarousel = () => {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  // Larghezza esatta di 1 set di 28 foto
  const singleSetWidth = works.length * (ITEM_WIDTH + GAP);

  useEffect(() => {
    const animate = () => {
      if (!pausedRef.current && trackRef.current) {
        posRef.current += SPEED;
        // Reset seamless: quando ha percorso esattamente 1 set torna a 0
        if (posRef.current >= singleSetWidth) {
          posRef.current -= singleSetWidth;
        }
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [singleSetWidth]);

  return (
    <div
      className="w-full bg-black/40 backdrop-blur-sm py-4 overflow-hidden"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        ref={trackRef}
        className="flex gap-3 will-change-transform"
        style={{ width: `${allWorks.length * (ITEM_WIDTH + GAP)}px` }}
      >
        {allWorks.map((work, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
            style={{ width: ITEM_WIDTH, height: 128 }}
          >
            <img
              src={work}
              alt={`Lavoro ${(idx % works.length) + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksCarousel;
