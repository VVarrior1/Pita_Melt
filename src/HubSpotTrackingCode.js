import { useEffect } from 'react';

const HubSpotTrackingCode = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = "//js.hs-scripts.com/45589930.js";
    script.async = true;
    script.defer = true;
    script.id = "hs-script-loader";

    // Append the script to the body
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default HubSpotTrackingCode;
