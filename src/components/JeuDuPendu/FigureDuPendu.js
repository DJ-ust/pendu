import React from "react";

const FigureDuPendu = ({ erreurs }) => {
  // Tableau contenant les parties du dessin du pendu pour chaque erreur
  const dessinPendu = [
    // 0 erreurs : pendu initial
    (
      <div>
        <p>Figure du pendu</p>
        <pre>
          {`
            _______
           |       |
                   |
                   |
                   |
                   |
                  ===
        `}
        </pre>
      </div>
    ),
    // 1 erreur : tête
    (
      <div>
        <p>Figure du pendu</p>
        <pre>
          {`
            _______
           |       |
           |       O
                   |
                   |
                   |
                  ===
        `}
        </pre>
      </div>
    ),
    // 2 erreurs : tête et torse
    (
      <div>
        <p>Figure du pendu</p>
        <pre>
          {`
            _______
           |       |
           |       O
           |       |
           |       |
                   |
                  ===
        `}
        </pre>
      </div>
    ),
    // 3 erreurs : tête, torse et bras gauche
    (
      <div>
        <p>Figure du pendu</p>
        <pre>
          {`
            _______
           |       |
           |       O
           |      /|
           |       |
                   |
                  ===
        `}
        </pre>
      </div>
    ),
    // 4 erreurs : tête, torse, bras gauche et bras droit
    (
      <div>
        <p>Figure du pendu</p>
        <pre>
          {`
            _______
           |       |
           |       O
           |      /|\\
           |       |
                   |
                  ===
        `}
        </pre>
      </div>
    ),
    // 5 erreurs : tête, torse, bras gauche, bras droit et jambe gauche
    (
      <div>
        <p>Figure du pendu</p>
        <pre>
          {`
            _______
           |       |
           |       O
           |      /|\\
           |       |
           |      /
                  ===
        `}
        </pre>
      </div>
    ),
    // 6 erreurs : tête, torse, bras gauche, bras droit, jambe gauche et jambe droite
    (
      <div>
        <p>Figure du pendu</p>
        <pre>
          {`
            _______
           |       |
           |       O
           |      /|\\
           |       |
           |      / \\
                  ===
        `}
        </pre>
      </div>
    ),
    // 7 erreurs : pendu complet
    (
      <div>
        <p>Figure du pendu</p>
        <pre>
          {`
            _______
           |       |
           |       O
           |      /|\\
           |       |
           |      / \\
                  ===
          Vous avez perdu !
        `}
        </pre>
      </div>
    )
  ];

  // Rendu de la partie appropriée du dessin en fonction du nombre d'erreurs
  return <div className="figure-du-pendu">{dessinPendu[erreurs]}</div>;
};

export default FigureDuPendu;
