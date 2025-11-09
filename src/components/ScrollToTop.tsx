import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function scrollToTop(behavior: ScrollBehavior = 'smooth') {
  const options: ScrollToOptions = {
    top: 0,
    left: 0,
    behavior,
  };

  const scrollingElement = document.scrollingElement || document.documentElement;

  if (scrollingElement) {
    scrollingElement.scrollTo({ ...options });
  }

  window.scrollTo({ ...options });
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset instantly first to cancel momentum scrolling on mobile browsers.
    scrollToTop('auto');

    // Then perform a smooth scroll if the user hasn't requested reduced motion.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      requestAnimationFrame(() => scrollToTop('smooth'));
    }
  }, [pathname]);

  return null;
}

