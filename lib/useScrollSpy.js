import { useState, useEffect, useRef } from "react";

export default function useScrollSpy(sectionIds = []) {
  const [activeId, setActiveId] = useState(null);
  const observerRef = useRef(null);
  const sectionRefsRef = useRef({});

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Observer callback - determines which section is active
    const handleIntersection = (entries) => {
      const visibleSections = [];

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.dataset.sectionId;
          // Convert to number if it's a numeric string
          const id = isNaN(sectionId) ? sectionId : Number(sectionId);

          visibleSections.push({
            id,
            top: entry.boundingClientRect.top,
          });
        }
      });

      // If we have visible sections, activate the topmost one
      if (visibleSections.length > 0) {
        // Sort by top position and get the highest (smallest top value)
        visibleSections.sort((a, b) => a.top - b.top);
        setActiveId(visibleSections[0].id);
      }
    };

    // Create observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "-10% 0px -70% 0px",
      threshold: 0,
    });

    // Observe all existing sections
    Object.values(sectionRefsRef.current).forEach((element) => {
      if (element) {
        observerRef.current.observe(element);
      }
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // Empty dependency array - only create observer once

  // Function to attach refs to sections
  const setRef = (id, element) => {
    if (element) {
      element.dataset.sectionId = id;
      sectionRefsRef.current[id] = element;

      // If observer exists, observe this element
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    } else {
      // Element is being unmounted
      if (sectionRefsRef.current[id]) {
        if (observerRef.current) {
          observerRef.current.unobserve(sectionRefsRef.current[id]);
        }
        delete sectionRefsRef.current[id];
      }
    }
  };

  return { activeId, setRef };
}
