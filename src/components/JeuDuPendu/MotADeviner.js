import React from "react";

const MotADeviner = ({ mot, lettresDevinees }) => {
  const affichageMot = mot.split('').map((lettre, index) => {
    if (lettresDevinees.includes(lettre)) {
      return lettre; // Affiche la lettre si elle a été devinée
    } else {
      return "_"; // Affiche un tiret si la lettre n'a pas été devinée
    }
  }).join(' ');

  return (
    <div className="mot-a-deviner">
      <p>{affichageMot}</p>
    </div>
  );
};

export default MotADeviner;
