const champTexte = document.getElementById("inputTache");
const btnAjouter = document.getElementById("btnAjouter");
const listeTaches = document.getElementById("listeTaches");

console.log(champTexte)
console.log(btnAjouter)
console.log(listeTaches)

btnAjouter.addEventListener("click", function() {
  const texte = champTexte.value.trim(); // trim() supprime les espaces inutiles

  if (texte === "") return; // guard clause — rien à ajouter si vide

  ajouterTache(texte);
  champTexte.value = ""; // vider le champ après ajout
});

function ajouterTache(texte){
    // Créer l'élément <li>
    const elt_li = document.createElement("li");

    // Créer la case à cocher
    const elt_checkbox = document.createElement("input");
    elt_checkbox.type = "checkbox";

    // Créer le texte
    const elt_span = document.createElement("span");
    elt_span.textContent = texte;

    // Créer le bouton supprimer
    const btnSupprimer = document.createElement("button");
    btnSupprimer.textContent = "Supprimer";
    btnSupprimer.classList.add("btn-supprimer"); // ajout de la classe créé dans style.css

    // Assembler le tout
    elt_li.appendChild(elt_checkbox);
    elt_li.appendChild(elt_span);
    elt_li.appendChild(btnSupprimer);
    listeTaches.appendChild(elt_li);

    // Cocher = marquer comme terminée
    elt_checkbox.addEventListener("change", function(){
        elt_span.classList.toggle("terminee");
    })

    // Supprimer la tâche
    btnSupprimer.addEventListener("click", function(){
        elt_li.remove();
    })
}