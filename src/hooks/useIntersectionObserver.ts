import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Store ref.current in a variable, as it's safer inside the effect
    const element = ref.current;

    // Don't create an observer if there's no element
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
        ([entry]) => {
          // If the element is intersecting, update the state and stop observing
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element); // Clean up: stop observing once visible
          }
        },
        { threshold }
    );

    observer.observe(element);

    // The cleanup function for when the component unmounts
    return () => {
      observer.unobserve(element);
    };
  }, [ref, threshold]); // <-- FIXED DEPENDENCY ARRAY

  return [ref, isVisible] as const;
};