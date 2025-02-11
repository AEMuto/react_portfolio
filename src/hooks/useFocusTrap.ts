import { useCallback, useEffect, useRef } from "react";

type UseFocusTrapOptions = {
  enabled: boolean;
  onEscape?: () => void;
};

/**
 * Custom hook that implements a focus trap within a container element
 * @param options Configuration options for the focus trap
 * @returns An object containing the ref to be attached to the container element
 */
const useFocusTrap = ({ enabled, onEscape }: UseFocusTrapOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Get all focusable elements within the container
  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return [];
    
    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(
        `button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`
      )
    );
  }, []);

  // Handle tab key navigation
  const handleTab = useCallback((e: KeyboardEvent) => {
    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // If shift + tab
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } 
    // If just tab
    else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }, [getFocusableElements]);

  // Handle keydown events
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Tab") {
      handleTab(e);
    } else if (e.key === "Escape" && onEscape) {
      onEscape();
    }
  }, [handleTab, onEscape]);

  // Set up focus trap when enabled
  useEffect(() => {
    if (!enabled) return;

    // Store current active element
    previousActiveElement.current = document.activeElement as HTMLElement;
    
    // Focus first focusable element in modal
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // Add keyboard event listener
    document.addEventListener("keydown", handleKeyDown);

    // Clean up
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [enabled, getFocusableElements, handleKeyDown]);

  return { containerRef };
};

export default useFocusTrap;