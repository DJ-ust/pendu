import React from "react";

const LettresDevinees = ({ lettresDevinees }) => {
  return (
    <div className="lettres-devinees">
      <h2>Lettres devinées :</h2>
      <p>{lettresDevinees.join(", ")}</p>
    </div>
  );
};

export default LettresDevinees;
