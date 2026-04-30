/*
Phase 2 — Manipulation du DOM
Le DOM (Document Object Model) c'est la représentation de ta page HTML en JS. 
Grâce au DOM, ton code JS peut lire, modifier, ajouter ou supprimer des éléments 
HTML en temps réel.
*/

/*********************************************************************************
    Concept 1 — Sélectionner des éléments
*********************************************************************************/
// Par ID — retourne un seul élément
const titre = document.getElementById("titre");
const message = document.getElementById("message");
const bouton = document.getElementById("monBouton");

const texteOriginal = message.textContent; // on sauvegarde le texte du HTML

console.log(titre); // Affiche l'élément HTML
console.log(message); // Affiche l'élément HTML

/*********************************************************************************
    Concept 2 — Modifier des éléments
*********************************************************************************/
// Modifier le texte
titre.textContent = "Titre modifier par JS !";

// Modifier le style
titre.style.color = "green";
message.style.color = "red";
message.style.fontSize = "20px";

/*********************************************************************************
    Concept 3 — Écouter les événements
*********************************************************************************/
// addEventListener : attend qu'un événement se produise (ici un click) puis exécute une fonction.
bouton.addEventListener("click", function(){
    message.textContent = "Tu as cliquer sur le bouton !";
    message.style.color = "blue";
})

const btReset = document.getElementById("boutonReset");
btReset.addEventListener("click", function(){
    message.textContent = texteOriginal; // on restaure depuis la variable
    message.style.color = "black";
})

/*********************************************************************************
    Concept 4 — Créer et supprimer des éléments
*********************************************************************************/
// créer un élément
const nouvelElement = document.createElement("p");
nouvelElement.textContent = "Je suis un nouveau paragraphe !";
nouvelElement.style.color = "blue";

// l'ajouter dans la page
document.body.appendChild(nouvelElement);

// Supprimer le nouvel élément de la page
nouvelElement.remove();

/*********************************************************************************
    Concept 5 — classList
*********************************************************************************/
// classList permet de manipuler les classes CSS d'un élément 
// — c'est la bonne façon de changer le style en JS plutôt que d'écrire du CSS directement dans le JS

titre.classList.add("surligne")     // ajoute la classe
titre.classList.remove("surligne"); // retire la classe
titre.classList.toggle("surligne")  // ajoute si absente, retire si présente

// toggle : est particulièrement utile pour les boutons on/off.

const btSurligne = document.getElementById("surligneTitre");
btSurligne.addEventListener("click", function(){
    titre.classList.toggle("surligne");
})