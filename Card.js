import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-warm border border-cream-200 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
