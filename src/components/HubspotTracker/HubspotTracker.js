// src/components/HubSpotTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HubSpotTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever location changes
    if (window._hsq && window._hsq.push) {
      window._hsq.push(['setPath', window.location.pathname + window.location.search]);
      window._hsq.push(['trackPageView']);
    }
  }, [location]);

  return null;
};

export default HubSpotTracker;