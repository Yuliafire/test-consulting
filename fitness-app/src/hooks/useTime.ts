'use client';

import { useState, useEffect } from 'react';

export function useTimer(initialSeconds: number = 120) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRed, setIsRed] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;

        if (newTime <= 30) {
          setIsRed(true);
          setIsBlinking(newTime % 2 === 0);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isExpired = timeLeft <= 0;

  return {
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0'),
    isRed,
    isBlinking,
    isExpired,
    totalSeconds: timeLeft,
  };
}
