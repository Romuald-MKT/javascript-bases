const questions = [
  {
    question: "Quel mot-clé utilise-t-on pour déclarer une variable qui ne change pas ?",
    choix: ["var", "let", "const", "static"],
    bonneReponse: 2
  },
  {
    question: "Que retourne typeof [] en JavaScript ?",
    choix: ["array", "object", "table", "list"],
    bonneReponse: 1
  },
  {
    question: "Quelle méthode ajoute un élément à la fin d'un tableau ?",
    choix: ["unshift()", "push()", "pop()", "shift()"],
    bonneReponse: 1
  },
  {
    question: "Que fait filter() sur un tableau ?",
    choix: [
      "Modifie chaque élément",
      "Retourne un nouvel élément transformé",
      "Retourne un nouveau tableau filtré",
      "Supprime le tableau"
    ],
    bonneReponse: 2
  },
  {
    question: "Quelle syntaxe est une arrow function valide ?",
    choix: [
      "function (a, b) => a + b",
      "const f = (a, b) => a + b",
      "const f = a, b -> a + b",
      "arrow (a, b) { return a + b }"
    ],
    bonneReponse: 1
  }
];

export default questions;