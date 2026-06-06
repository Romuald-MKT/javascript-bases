// Différence fondamentale entre : getElementById et querySelector

// getElementById — uniquement par ID, sans le #
const t1 = document.getElementById("titre");

// querySelector — syntaxe CSS, retourne le PREMIER élément trouvé
const t2 = document.querySelector("#titre");       // par ID
const classeCSS = document.querySelector(".btn-supprimer"); // par classe
const h1 = document.querySelector("h1");           // par balise
const combinaison = document.querySelector("li span");      // par combinaison
console.log(t1)
console.log(t2)
console.log(classeCSS)
console.log(h1)
console.log(combinaison)



// Début du code de la ToDo List !

const champTexte = document.getElementById("inputTache");
const btnAjouter = document.getElementById("btnAjouter");
const listeTaches = document.getElementById("listeTaches");
console.log(champTexte)
console.log(btnAjouter)
console.log(listeTaches)

/*
JSON.parse(...) || [] — on récupère les tâches sauvegardées, ou un tableau vide si rien n'existe encore
taches.forEach() — on réaffiche toutes les tâches au chargement
tache.terminee = checkbox.checked — on met à jour l'objet quand on coche
taches.filter() — on supprime la tâche du tableau avant de la retirer du DOM
sauvegarder() — appelée à chaque modification pour mettre à jour le localStorage
*/

// Récupérer les tâches depuis le localStorage au chargement
let taches = JSON.parse(localStorage.getItem("taches")) || [];
// Afficher les tâches sauvegardées au chargement de la page
taches.forEach(function(tache) {
    afficherTache(tache);
});

// Ajouter une tâche
btnAjouter.addEventListener("click", function() {
    const contenu = champTexte.value.trim(); // trim() supprime les espaces inutiles

    if (contenu === "") return; // guard clause — rien à ajouter si vide
  
    ajouterTache(contenu);
    champTexte.value = ""; // vider le champ après ajout
});
// Crée la tache, la sauvegarde et l'afficherTache
function ajouterTache(contenu){
    const nouvelleTache = {texte: contenu, terminee : false};
    taches.push(nouvelleTache);
    sauvegarder();
    afficherTache(nouvelleTache) // délègue l'affichage à afficherTache
}

// Uniquement afficher une tâche dans le DOM
function afficherTache(tache){
    // Créer l'élément <li>
    const liVar = document.createElement("li");

    // Créer la case à cocher
    const checkboxVar = document.createElement("input");
    checkboxVar.type = "checkbox";
    checkboxVar.checked = tache.terminee;

    // Créer le texte
    const spanVar = document.createElement("span");
    spanVar.textContent = tache.texte;
    spanVar.style.flex = "9";

    if (tache.terminee) {
        spanVar.classList.add("terminee");
    }

     // Créer le bouton supprimer
    const btnSupprimer = document.createElement("button");
    btnSupprimer.textContent = "Supprimer";
    btnSupprimer.classList.add("btn-supprimer"); // ajout de la classe créé dans style.css

    // Assembler le tout
    liVar.appendChild(checkboxVar);
    liVar.appendChild(spanVar);
    liVar.appendChild(btnSupprimer);
    listeTaches.appendChild(liVar);

    // Cocher / décocher
    checkboxVar.addEventListener("change", function() {
        tache.terminee = checkboxVar.checked;
        spanVar.classList.toggle("terminee");
        sauvegarder();
        afficherCompteur();
    });

    // Supprimer
    /*
    Clic sur Supprimer
        → 1. Supprimer du tableau (données)
        → 2. Sauvegarder le nouveau tableau (localStorage)
        → 3. Supprimer du DOM (visuel)
    */
    btnSupprimer.addEventListener("click", function() {  // On dit au navigateur : "écoute les clics sur ce bouton Supprimer, et quand ça arrive, exécute cette fonction"
        taches = taches.filter(function(t) { // taches.filter() parcourt chaque élément du tableau
        return t !== tache;
        }); // On reconstruit le tableau taches en gardant uniquement les tâches qui ne sont pas celle qu'on veut supprimer.
        sauvegarder(); // On écrit le nouveau tableau taches (sans la tâche supprimée) dans le localStorage.
        liVar.remove(); // On supprime visuellement le li de la page.
    });

    afficherCompteur();
}

// Sauvegarder le tableau dans le localStorage
function sauvegarder() {
    localStorage.setItem("taches", JSON.stringify(taches));
}

// Compte les éléments visuels dans le DOM — pas les données dans le localStorage.
//Affiche le nombre de tache terminée
/*function afficherCompteur() {
    const tachesTerminees = document.querySelectorAll(".terminee");
    console.log(`Tu as ${tachesTerminees.length} tâche(s) terminée(s)`);
}*/

// Compte les éléments terminés depuis le tableau présent dans le localStorage
function afficherCompteur() {
    const nombreTerminees = taches.filter(function(tache) {
        return tache.terminee === true;
    }).length;

    console.log(`Tu as ${nombreTerminees} tâche(s) terminée(s)`);
}

