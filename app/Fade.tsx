"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number; // optional delay for staggered sections
};

export default function FadeInSection({
  children,
  className = "",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if element is already in viewport on mount
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setIsVisible(true);
      return; // skip observer if already visible
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
