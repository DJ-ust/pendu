import React from "react";

const Clavier = ({ onLettreSelectionnee }) => {
  // Tableau de lettres disponibles
  const lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="clavier">
      {lettres.map((lettre, index) => (
        <button key={index} onClick={() => onLettreSelectionnee(lettre)}>
          {lettre}
        </button>
      ))}
    </div>
  );
};

export default Clavier;
