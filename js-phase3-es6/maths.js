// utils.js — on exporte des fonctions

/*
    export const additionner = (a, b) => a + b;
    export const soustraire = (a, b) => a - b;
    export const multiplier = (a, b) => a * b;
    export const saluer = nom => `Bonjour ${nom} !`;
*/

/* OU en une seule fois à la fin du fichier : */

const additionner = (a, b) => a + b;
const soustraire = (a, b) => a - b;
const multiplier = (a, b) => a * b;
const saluer = nom => `Bonjour ${nom} !`;

export { additionner, soustraire, multiplier, saluer };