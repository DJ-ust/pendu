import React, { useState, useEffect } from "react";
import MotADeviner from "./MotADeviner";
import LettresDevinees from "./LettresDevinees";
import FigureDuPendu from "./FigureDuPendu";
import MessageErreur from "./MessageErreur";
import Clavier from "./Clavier";

const JeuDuPendu = () => {
  const [motADeviner, setMotADeviner] = useState("");
  const [lettresDevinees, setLettresDevinees] = useState([]);
  const [erreur, setErreur] = useState(null);
  const [partiePerdue, setPartiePerdue] = useState(false);
  const [erreurs, setErreurs] = useState(0);

  useEffect(() => {
    const fetchMotAleatoire = async () => {
      try {
        const response = await fetch("https://node-hangman-api-production.up.railway.app/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams({
            "locale": "fr-FR"
          })
        });
        if (!response.ok) {
          throw new Error("Impossible de charger le mot aléatoire");
        }
        const data = await response.json();
        setMotADeviner(data.word.toUpperCase());
      } catch (error) {
        setErreur(error.message);
      }
    };

    fetchMotAleatoire();
  }, []);

  const lettreSelectionnee = (lettre) => {
    const lettreMajuscule = lettre.toUpperCase();
    setLettresDevinees([...lettresDevinees, lettreMajuscule]);
    if (!motADeviner.includes(lettreMajuscule)) {
      setErreurs(erreurs + 1);
    }
  };

  useEffect(() => {
    if (erreurs === 7) {
      setPartiePerdue(true);
    }
  }, [erreurs]);

  return (
    <div className="jeu-du-pendu">
      <h1>Jeu du Pendu</h1>
      {erreur && <MessageErreur message={erreur} />}
      <MotADeviner mot={motADeviner} lettresDevinees={lettresDevinees} />
      <LettresDevinees lettresDevinees={lettresDevinees} />
      {partiePerdue ? (
        <div>
          <p>Vous avez perdu ! Le mot était : {motADeviner}</p>
          {/* Ajoutez ici d'autres éléments pour recommencer le jeu */}
        </div>
      ) : (
        <div>
          <FigureDuPendu erreurs={erreurs} />
          <Clavier onLettreSelectionnee={lettreSelectionnee} />
        </div>
      )}
    </div>
  );
};

export default JeuDuPendu;
