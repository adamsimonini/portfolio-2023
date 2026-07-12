import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

// Self-contained layer: occasionally streaks a star across the upper sky.
function ShootingStars() {
  const [stars, setStars] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const spawn = () => {
      // Skip ticks while the tab is hidden — background timers flush all at
      // once on return, which would burst several stars simultaneously.
      if (!document.hidden) {
        // Falls left-to-right or right-to-left, from anywhere in the sky.
        const goingRight = Math.random() < 0.5;
        const fall = 12 + Math.random() * 8; // shallow descent angle
        setStars((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            // Whole streak stays in the sky: max drop ≈ 38vw · sin(20°) ≈
            // 13vw ≈ 21vh — from a 35% start that's still above the skyline.
            top: 3 + Math.random() * 32,
            left: goingRight ? 5 + Math.random() * 45 : 55 + Math.random() * 40,
            angle: goingRight ? fall : 180 - fall, // mirrored heading falls the other way
            travel: 26 + Math.random() * 12, // vw
            duration: 0.9 + Math.random() * 0.9,
            length: 90 + Math.random() * 80,
          },
        ]);
      }
      timeoutRef.current = setTimeout(spawn, 5000 + Math.random() * 12000);
    };

    timeoutRef.current = setTimeout(spawn, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleEnd = (id) => {
    setStars((prev) => prev.filter((star) => star.id !== id));
  };

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          onAnimationEnd={() => handleEnd(star.id)}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.length}px`,
            animationDuration: `${star.duration}s`,
            "--angle": `${star.angle}deg`,
            "--travel": `${star.travel}vw`,
          }}
        />
      ))}
    </>
  );
}

export default ShootingStars;
