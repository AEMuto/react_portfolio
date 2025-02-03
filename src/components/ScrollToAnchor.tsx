import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const removeHashCharacter = (str: string) => str.slice(1);

const ScrollToAnchor = () => {
  const location = useLocation();

  // Handle scroll to top for project routes
  useEffect(() => {
    if (location.pathname.includes("/project")) {
      // Immediate scroll to prevent jitter
      window.scrollTo({
        top: 0,
        behavior: "instant" // Use instant instead of smooth to prevent jitter
      });
      
      // Then smooth scroll in case we're not already at top
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  }, [location.pathname]);

  // Handle anchor scrolling separately
  useLayoutEffect(() => {
    const { hash } = location;
    if (hash.length > 0) {
      setTimeout(() => {
        const element = document.getElementById(removeHashCharacter(hash));
        const yOffset = -64; // navbar height
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ 
            top: y, 
            behavior: "smooth" 
          });
        }
      }, 0);
    }
  }, [location.hash]);

  return null;
};

export default ScrollToAnchor;