import React from "react";

const Loader = () => {
  return (
    <div >
      {Array(12)
        .map((_, index) => (
          <div key={index} />
        ))}
    </div>
  );
};

export default Loader;
