import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-M22M1MDT4K";

// Initialize GA with your Measurement ID
export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

// Log page view for each route change
export const logPageView = (path) => {
  // Log the page view with Google Analytics
  ReactGA.send({
    hitType: "pageview",
    page: path, // Send the full page URL
  });
};