/** Concept 1 — Arrow Functions */

{
  {
    // Fonction classique
    function additionner(a,b){
        return a + b;
    }
    console.log(additionner(3, 5)); // 8
  }
  
  {
    // Arrow function — équivalent exact
    const additionner = (a,b) => {
        return a + b;
    };
    console.log(additionner(3, 5)); // 8
  }

  {
    // Version ultra courte — si une seule ligne, pas besoin de return ni {}
    const additionner = (a,b) => a + b;
    console.log(additionner(3, 5)); // 8
  }

  {
    // Avec un seul paramètre, pas besoin de parenthèses :
    const direbonjour = prenom => `Bonjour ${prenom} !`;
    console.log(direbonjour("Rmk")); // Bonjour Rmk
  }

  {
    // Dans les tableaux
    const prenoms = ["Rmk", "Alice", "Loic"];

    // Ancienne façon
    prenoms.forEach(function(prenom){
      console.log(prenom)
    });

    // Avec arrow function — beaucoup plus court
    prenoms.forEach(prenom => console.log(prenom));
  }

  {
    // Données de test
    const taches = [
      { texte: "Apprendre JS", terminee: false },
      { texte: "Faire le Quiz", terminee: true },
      { texte: "Pousser sur GitHub", terminee: false }
    ];

    {
      // Version classique — à réécrire
      function sauvegarder() {
        localStorage.setItem("taches", JSON.stringify(taches));
      }
    }
  
    {
      // Version Arrow
      const sauvegarder = () => localStorage.setItem("taches", JSON.stringify(taches));
    }
  
    // On simule la suppression de la 2ème tâche
    const tacheASupprimer = taches[1];

    // Version classique — à réécrire
    taches.filter(function(t) {
      return t !== tacheASupprimer;
    });
    // Version Arrow
    const resultat = taches.filter(t => t !== tacheASupprimer);
    console.log(resultat); // les 2 tâches restantes sans "Faire le Quiz"
  }
}


/** concept 2 — Destructuring */

// Le destructuring permet d'extraire des valeurs d'un objet ou d'un tableau et de les stocker dans des variables en une seule ligne. C'est massivement utilisé dans Vue.js.

{
  {
    const utilisateur = { nom: "Rmk", age: 25, aimeCode: true };
    {
      // Sans destructuring — ancien style
      const nom = utilisateur.nom;
      const age = utilisateur.age;
      const aimeCode = utilisateur.aimeCode;
      console.log(`${nom} ; ${age} ; ${aimeCode}`)
    }
    {
      // Avec destructuring — moderne
      const {nom, age, aimeCode} = utilisateur; // ici Les noms des variables doivent correspondre exactement aux clés de l'objet.
      console.log(nom);      // Rmk
      console.log(age);      // 25
      console.log(aimeCode); // true
    }
  }

  {
    ///---Renommer au passage---///
    // On extrait "nom" mais on le renomme "prenom"
    const utilisateur = { nom: "Rmk", age: 25 };
    // On extrait "nom" mais on le renomme "prenom"
    const { nom: prenom, age } = utilisateur;
    console.log(prenom); // Rmk
    console.log(age);    // 25
  }

  {
    ///---Valeur par défaut---///
    const utilisateur = {nom3: "Rmk"};
    // Si "age" n'existe pas dans l'objet, il vaut 0 par défaut
    const {nom, age = 0} = utilisateur;
    console.log(age); // 0
  }

  {
    ///---Destructuring de tableau---///
    const couleurs = ["rouge", "vert", "bleu"];

    {
      // Sans destructuring
      const premiere = couleurs[0];
      const deuxieme = couleurs[1];
    }
    
    {
      // Avec destructuring — l'ordre compte
      const [premiere, deuxieme, troisieme] = couleurs;
      console.log(premiere) // rouge
      console.log(deuxieme) // vert
      console.log(troisieme) // bleu
    }

    {
      // On veut uniquement la première et la troisième
      const [premiere, , troisieme] = couleurs;
      console.log(premiere);  // rouge
      console.log(troisieme); // bleu
    }
  }

  {
    const taches = [
      { texte: "Apprendre JS", terminee: false },
      { texte: "Faire le Quiz", terminee: true }
    ];

    ///---Parcours de la variable taches---///
    // Sans destructuring
    taches.forEach(tache =>{
      console.log(tache.texte,tache.terminee)
    });

    // Avec destructuring directement dans le paramètre
    taches.forEach(({texte, terminee}) =>{
      console.log(texte, terminee);
    });
  }

  {
    ///---Exo---///
    const profil = {
      nom: "Rmk",
      age: 25,
      adresse: {
        ville: "Charleroi",
        pays: "Belgique"
      },
      langages: ["HTML", "CSS", "JavaScript"]
    };

    // 1- Extrais nom et age avec le destructuring
    const {nom, age, adresse, langages} = profil;
    console.log(nom);
    console.log(age);

    // 2- Extrais ville depuis adresse
    const {ville, pays} = adresse;
    console.log(ville);

    // 3- Extrais le premier langage du tableau langages
    const [langage1, langage2, langage3] = langages;
    console.log(langage1);
  }
}


/** Concept 3 — Spread & Rest **/ 
// Spread et Rest utilisent la même syntaxe ... mais dans des contextes opposés.

{
  //Spread ... — étaler un tableau ou un objet
  //Spread étale le contenu d'un tableau ou d'un objet là où tu l'utilises.

  {
    //Sur les tableaux :
    const fruits = ["pomme", "banane"];
    const legumes = ["carotte", "poireau"];

    {
      // Sans spread — tableau imbriqué
      const aliments = [fruits, legumes];
      console.log(aliments); // [["pomme", "banane"], ["carotte", "poireau"]]

    }

    {
      // Avec spread — tableau fusionné
      const aliments = [...fruits, ...legumes];
      console.log(aliments); // ["pomme", "banane", "carotte", "poireau"]
    }
  }

  {
    // Copier l'adresse d'un tableau :
    const original = ["pomme", "banane"];
    // Sans spread — même référence, modifier copie modifie original
    const copie = original;
    copie.push("orange");
    console.log(original);
  }

  {  
    // Copier un tableau sans le modifier :
    const original = ["pomme", "banane"];
    // Avec spread — vraie copie indépendant
    const copie = [...original];
    copie.push("orange");
    console.log(original); // ["pomme", "banane"] ← intact ✅ 
  }

  {
    // Sur les objets :
    const base = { nom: "Rmk", age: 25 };
    const extra = { ville: "Charleroi", aimeCode: true };

    // Fusionner deux objets
    const profil = { ...base, ...extra };
    console.log(profil);
    // { nom: "Rmk", age: 25, ville: "Charleroi", aimeCode: true }
  }

  {
    // Modifier un objet sans le muter — très utilisé dans Vue.js :
    const tache = { texte: "Apprendre JS", terminee: false };

    // Créer une nouvelle tâche basée sur l'ancienne avec terminee modifié
    const tacheModifiee = { ...tache, terminee: true };
    console.log(tacheModifiee); // { texte: "Apprendre JS", terminee: true }
    console.log(tache);         // { texte: "Apprendre JS", terminee: false } ← intact

    const tacheModifiee1 = { ...tache, texte: "Apprendre Vue.js", terminee: false };
    console.log(tacheModifiee1); // { texte: "Apprendre Vue.js", terminee: false }
    console.log(tache);         // { texte: "Apprendre JS", terminee: false } ← intact
  }
  
  // Rest ... — regrouper des arguments
  // Rest fait l'inverse — il regroupe plusieurs valeurs dans un tableau. Il s'utilise dans les paramètres de fonction.
  
  {
    {
      // Sans rest — nombre d'arguments fixe
      function additionner(a, b) {
        return a + b;
      }
      console.log(additionner(1, 2));        // 3
      console.log(additionner(1, 2, 3));     // 3
      console.log(additionner(1, 2, 3, 4)); //  3
    }

    {
      // Avec rest — nombre d'arguments illimité
      function additionner(...nombres) {
        return nombres.reduce((total, n) => total + n, 0);
      }
      console.log(additionner(1, 2));        // 3
      console.log(additionner(1, 2, 3));     // 6
      console.log(additionner(1, 2, 3, 4)); // 10
      // ...nombres regroupe tous les arguments dans un tableau nombres.
    }

    {
      // Mélanger paramètres fixes et rest :
      function afficherProfil(nom, age, ...langages) {
        console.log(`${nom}, ${age} ans`);
        console.log(`Langages : ${langages}`);
      }

      afficherProfil("Rmk", 25, "HTML", "CSS", "JavaScript");
      // Rmk, 25 ans
      // Langages : HTML, CSS, JavaScript
      // Le rest doit toujours être le dernier paramètre.
    }

    {
      // Lien avec Vue.js
      // Le spread sur les objets est partout dans Vue.js — notamment pour modifier le state sans muter l'original :

      // Pattern très courant dans Vue.js / Pinia (store)
      const state = { utilisateur: { nom: "Rmk", age: 25 } };

      // Mettre à jour l'age sans toucher au reste
      const newState = { ...state, utilisateur: { ...state.utilisateur, age: 26 } };
    }
  }

  {
    ///---Exo---///
    const equipe1 = ["Alice", "Bob"];
    const equipe2 = ["Karim", "Sara"];

    const profil = { nom: "Rmk", age: 25 };

    // 1- Fusionne equipe1 et equipe2 dans un tableau touteEquipe avec spread
    const touteEquipe = [...equipe1, ...equipe2];
    console.log(touteEquipe);
    // 2- Ajoute "Rmk" au début de touteEquipe sans modifier les tableaux originaux
    //touteEquipe.unshift("Rmk");
    const equipeComplete = ["Rmk", ...touteEquipe];
    console.log(equipe1);
    console.log(equipe2);
    console.log(touteEquipe);
    // 3- Crée un profilComplet à partir de profil en ajoutant ville: "Charleroi" sans modifier profil
    const profilComplet = {...profil, ville: "Charleroi"};
    console.log(profilComplet);
  }

}


/** Concept 4 — map, filter, reduce **/ 
// Ce sont les 3 méthodes les plus utilisées en JS moderne — et massivement dans Vue.js pour manipuler des listes de données.

{
  /*
    map — transformer chaque élément
  */

  {
    //  map parcourt un tableau et retourne un nouveau tableau avec chaque élément transformé.
    const nombres = [1, 2, 3, 4, 5];

    // Multiplier chaque nombre par 2
    const doubles = nombres.map(n => n * 2);
    console.log(doubles); // [2, 4, 6, 8, 10]
    console.log(nombres); // [1, 2, 3, 4, 5] ← intact
  }

  {
    // Sur un tableau d'objets : (Extraire les éléments d'un objet pour en faire un tableau)
    const taches = [
      { texte: "Apprendre JS", terminee: false },
      { texte: "Faire le Quiz", terminee: true },
      { texte: "Pousser sur GitHub", terminee: false }
    ];

    {
      // Extraire uniquement les textes
      const textes = taches.map(tache => tache.texte);
      console.log(textes); // ["Apprendre JS", "Faire le Quiz", "Pousser sur GitHub"]
    }
    
    {
      // Avec destructuring dans le paramètre
      const textes = taches.map(({ texte }) => texte);
      console.log(textes); // ["Apprendre JS", "Faire le Quiz", "Pousser sur GitHub"]
    }
  }

  /*
    filter — garder certains éléments
  */

  {
    // filter : Il retourne un nouveau tableau avec uniquement les éléments qui passent le test.
    const taches = [
      { texte: "Apprendre JS", terminee: false },
      { texte: "Faire le Quiz", terminee: true },
      { texte: "Pousser sur GitHub", terminee: false }
    ];

    // Garder uniquement les tâches non terminées
    const aFaire = taches.filter(tache => !tache.terminee);
    console.log(aFaire);
    // [{ texte: "Apprendre JS"... }, { texte: "Pousser sur GitHub"... }]

    // Garder uniquement les tâches terminées
    const terminees = taches.filter(({ terminee }) => terminee);
    console.log(terminees);
    // [{ texte: "Faire le Quiz", terminee: true }]
  }

  /*
    reduce — construire une valeur finale
  */

  {
    // reduce est le plus puissant des trois — il réduit un tableau à une seule valeur (nombre, objet, tableau...).

    {
      const nombres = [1, 2, 3, 4, 5];

      // Additionner tous les nombres
      const total = nombres.reduce((acc, n) => acc + n, 0);
      console.log(total); // 15
    }

    {
      // Compter les tâches terminées :
      const taches = [
        { texte: "Apprendre JS", terminee: false },
        { texte: "Faire le Quiz", terminee: true },
        { texte: "Pousser sur GitHub", terminee: true }
      ];

      const nombreTerminees = taches.reduce((acc, tache) => {
        return tache.terminee ? acc + 1 : acc;
      }, 0);
      console.log(nombreTerminees); // 2
    }

    {
      // Chaîner les méthodes — le vrai pouvoir
      // map, filter et reduce se chaînent naturellement :
      const taches = [
        { texte: "Apprendre JS", terminee: false },
        { texte: "Faire le Quiz", terminee: true },
        { texte: "Pousser sur GitHub", terminee: true }
      ];

      // filter → garde les terminées
      // map → extrait les textes
      // reduce → construit une seule string avec tous les textes
      const resultat = taches
        .filter(tache => tache.terminee)
        .map(tache => tache.texte)
        .reduce((acc, texte) => acc + " | " + texte);

      console.log(resultat); // "Faire le Quiz | Pousser sur GitHub"

      // Lien avec Vue.js
      // Dans Vue.js tu utiliseras ces méthodes constamment dans les computed properties :

      // Exemple typique dans un composant Vue
      /*const tachesTerminees = computed(() =>
        taches.value.filter(tache => tache.terminee)
      );

      const textesTaches = computed(() =>
        taches.value.map(({ texte }) => texte)
      );*/
    }

    {
      ///---Exo---///

      const produits = [
        { nom: "Laptop", prix: 999, disponible: true },
        { nom: "Souris", prix: 29, disponible: false },
        { nom: "Clavier", prix: 79, disponible: true },
        { nom: "Écran", prix: 349, disponible: true },
        { nom: "Casque", prix: 149, disponible: false }
      ];

      // 1- Extrais uniquement les noms de tous les produits avec map
      const nomProduits = produits.map(({nom}) => nom);
      console.log(nomProduits);

      // 2- Filtre uniquement les produits disponibles avec filter
      const produitsDisponibles = produits
        .filter(produit => produit.disponible)
        .map(produit => produit.nom);
      
      // OU 
      /*const produitsDisponibles = produits
        .filter(({disponible}) => disponible)
        .map(({nom}) => nom);*/
      console.log(produitsDisponibles);

      // 3- Calcule le prix total des produits disponibles en chaînant filter et reduce
      const prixTotalProduitsDisponibles = produits
        .filter(produit => produit.disponible)
        .reduce((total, produit) => total + produit.prix,0);
      console.log(prixTotalProduitsDisponibles);
    }

  }
  
}
