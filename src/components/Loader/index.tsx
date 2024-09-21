import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="#0a66c2" // Adjust the color to match your spinner
          strokeWidth="5"
          strokeDasharray="31.4 31.4"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="0 25 25;360 25 25"
          />
        </circle>
      </svg>
      <p>Cargando...</p>
    </div>
  );
};

export default Loader;
