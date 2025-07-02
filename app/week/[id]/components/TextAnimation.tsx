"use client";
import { useEffect, useState } from "react";

export function TextAnimation() {
  const [visibleChars, setVisibleChars] = useState(0);
  const text = "Hello, World! Welcome to the Text Animation Demo";
  const speed = 200;

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev < text.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, speed);

    return () => clearInterval(timer);
  }, [text.length]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out ${
            index < visibleChars
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-50 translate-y-4"
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
