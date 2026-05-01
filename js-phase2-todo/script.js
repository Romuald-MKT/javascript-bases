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
    });

    // Supprimer
    btnSupprimer.addEventListener("click", function() {
        taches = taches.filter(function(t) {
        return t !== tache;
        });
        sauvegarder();
        liVar.remove();
    });
}

// Sauvegarder le tableau dans le localStorage
function sauvegarder() {
    localStorage.setItem("taches", JSON.stringify(taches));
}

