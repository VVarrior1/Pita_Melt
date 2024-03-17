import React from "react";

function CallButton() {
  const navigateToWebsite = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <button type="button" onClick={navigateToWebsite}>
      Goo Website
    </button>
  );
}

export default CallButton;
