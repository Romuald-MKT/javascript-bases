/************************************************************************************************/
//Concept 1 — Les variables
//Une variable, c'est une boîte dans laquelle tu stockes une valeur pour la réutiliser plus tard. 
// En JS moderne, on utilise deux mots-clés : const et let.

/*La règle simple :
Par défaut, utilise toujours const
Si tu sais que la valeur va changer, utilise let
Oublie var — c'est l'ancienne façon, tu n'en auras pas besoin

// Les types de valeurs qu'on peut stocker :
const nom = "Alice"       // texte → string
const age = 25            // nombre → number
const estConnecte = true  // vrai/faux → boolean
const voiture = null      // valeur vide intentionnelle
*/

const nom = "Rmk";
const age = 15;
const aimeCode = true;
let maison = null;

// Avec + (ta version, correcte)
console.log("Je suis " + nom + ", j'ai " + age);

// Avec template literal (version moderne, plus lisible)
console.log(`je suis ${nom}, j'ai ${age}.`);
console.log(`Aime le code : ${aimeCode}.\n Maison : ${maison}`);
maison = "Appartement s+2 😊";
console.log(`${maison}`);

/************************************************************************************************/
//Concept 2 — Les conditions
//Les conditions permettent à ton code de prendre des décisions selon la valeur d'une variable.

//Les opérateurs de comparaison à connaître :
/*
===   // égal à (valeur ET type)
!==   // différent de
>     // supérieur à
<     // inférieur à
>=    // supérieur ou égal
<=    // inférieur ou égal
*/

// Une règle importante : utilise toujours === et jamais ==. 
// Le double égal peut donner des résultats surprenants en JS, le triple égal est strict et fiable.

// Les opérateurs logiques :
/*
&&    // ET — les deux conditions doivent être vraies
||    // OU — au moins une condition doit être vraie
!     // NON — inverse la condition
*/

if(aimeCode && age >= 18) {
    console.log(`Bienvenue ${nom}, tu peux coder 😊!`);
}else if(age < 18){
    console.log(`Trop jeune pour coder.`);
}else{
    console.log(`Convaincs-toi d'abord !`);
}

/************************************************************************************************/
// Concept 3 — Les fonctions
// Une fonction, c'est un bloc de code réutilisable auquel tu donnes un nom. 
// Au lieu de réécrire la même logique plusieurs fois, tu la mets dans une fonction et tu l'appelles 
// quand tu en as besoin.

/*
La différence entre console.log dans la fonction et return :

console.log affiche juste dans la console, la valeur est perdue ensuite
return renvoie la valeur pour qu'on puisse la stocker et la réutiliser
*/

// Structure de départ
function verifierAcces(nom, age, aimeCode) {
  // ton code ici
  if(aimeCode && age >= 18){
    return `Bienvenue ${nom}, tu peux coder 😊!`;
  }else if(age < 18){
    return `Trop jeune pour coder.`;
  }else{
    return `Convaincs-toi d'abord !`;
  }
}

const message = verifierAcces("Rmk", 25, true);
console.log(message);

console.log(verifierAcces("Rmk", 25, true));   // Bienvenue Rmk, tu peux coder 😊!
console.log(verifierAcces("Luc", 15, true));   // Trop jeune pour coder.
console.log(verifierAcces("Sam", 30, false));  // Convaincs-toi d'abord !

/************************************************************************************************/
//Concept 4 — Les tableaux
//Un tableau, c'est une liste ordonnée de valeurs stockées dans une seule variable.

/*
Les opérations essentielles :
const fruits = ["pomme", "banane", "orange"];

fruits.push("mangue");      // ajoute à la fin
fruits.pop();               // supprime le dernier
fruits.unshift("fraise");   // ajoute au début
fruits.shift();             // supprime le premier

console.log(fruits);
*/

const prenoms = ["Rmk", "Alice", "Loic", "Vanessa"];
const collegues = ["Bob", "Sara", "Karim"];

function saluerTout(tableau){
    if(!Array.isArray(tableau)){
        console.log("Erreur : paramètre doit être un tableau !");
        return; // return; seul stoppe immédiatement l'exécution de la fonction et retourne undefined. 
        // C'est une sortie anticipée.
    }

    for (let i = 0; i < tableau.length; i++) {
        console.log(`Bonjour ${tableau[i]} !`)
        //const nom = prenoms[i];
    }

    for (const element of tableau) {
        console.log(`Bonjour ${element} 😍!`)
    }
}

saluerTout("tableau");
saluerTout(prenoms);
saluerTout(collegues);

/*
Question 2 — const et les tableaux
C'est une nuance très importante en JS. const signifie que tu ne peux pas réassigner la variable, 
mais tu peux tout à fait modifier le contenu du tableau :

const prenoms = ["Rmk", "Alice", "Loic", "Vanessa"];

// ✅ Autorisé — on modifie le contenu
prenoms.push("Bob");
prenoms.pop();
prenoms[0] = "Rémi";

// ❌ Interdit — on réassigne la variable
prenoms = ["Bob", "Sara"]; // TypeError !

Pense à const comme un panneau d'adresse : l'adresse est fixe, 
mais ce qu'il y a dans la maison peut changer.

*/

/************************************************************************************************/
/*
Concept 5 — Les objets
Un objet, c'est une collection de propriétés qui décrivent une entité. 
Là où un tableau stocke une liste, un objet stocke des informations structurées.

const utilisateur = {
  nom: "Rmk",
  age: 25,
  aimeCode: true
};

console.log(utilisateur.nom);       // Rmk
console.log(utilisateur.age);       // 25
console.log(utilisateur.aimeCode);  // true

On peut aussi modifier et ajouter des propriétés :
Même règle que les tableaux : const n'empêche pas de modifier le contenu de l'objet.

utilisateur.age = 26;          // modifier
utilisateur.ville = "Bruxelles"; // ajouter une nouvelle propriété
console.log(utilisateur);

On peut mettre des fonctions dans un objet — on appelle ça une méthode :

const utilisateur = {
  nom: "Rmk",
  age: 25,
  sePresenter() {
    console.log(`Je suis ${this.nom}, j'ai ${this.age} ans.`);
  }
};

utilisateur.sePresenter(); // Je suis Rmk, j'ai 25 ans.

this désigne l'objet lui-même — c'est comment la méthode accède aux propriétés de son propre objet.

Tableau d'objets — combinaison très courante en JS :

const utilisateurs = [
  { nom: "Rmk", age: 25 },
  { nom: "Alice", age: 30 },
  { nom: "Loic", age: 17 }
];

for (const user of utilisateurs) {
  console.log(`${user.nom} a ${user.age} ans`);
}

*/

const profil = {
  nom: "Rmk",
  age: 25,
  aimeCode: true,
  collegues: ["Bob", "Sara", "Karim"],
  sePresenter() {
    console.log(`Je suis ${this.nom}, j'ai ${this.age} ans.`);
    for (const collegue of this.collegues) {
      console.log(`- ${collegue}`);
    }
  }
};

/*const profil = {}; 
//nom, age, aimeCode, et une de ton choix
profil.nom = "Rmk";
profil.age = 25;
profil.aimeCode = true;
profil.collegues = ["Bob", "Sara", "Karim"];
profil.sePresenter = function() {
    console.log(`Je suis ${this.nom}, j'ai ${this.age} ans.`);
    console.log(`Aime le code : ${this.aimeCode}`);
    // parcourir le tableau de collègues
   console.log("Mes collègues :");
   for(const collegue of this.collegues){
    console.log(`- ${collegue}`);
   }
};*/

profil.sePresenter();

