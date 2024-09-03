import React from "react";

// Static color for the gradient
const STATIC_COLOR = "#13FFAA"; // Example static color

function AuroraGradient() {
  const backgroundImage = `radial-gradient(125% 125% at 50% 0%, #020617 50%, ${STATIC_COLOR})`;

  return (
    <section
      style={{ backgroundImage }}
      className="relative min-h-screen"
    >
      {/* Content can go here */}
    </section>
  );
}

export default AuroraGradient;