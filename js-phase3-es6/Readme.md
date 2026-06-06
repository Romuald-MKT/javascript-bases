# JS Phase 3 — JS Moderne (ES6+)

Apprentissage de la syntaxe JavaScript moderne (ES6+), socle indispensable pour travailler avec Vue.js.

---

## Concepts couverts

### 1. Arrow Functions

Syntaxe moderne et concise pour écrire des fonctions.

```javascript
// Classique
function additionner(a, b) {
  return a + b;
}

// Arrow function
const additionner = (a, b) => a + b;
```

### 2. Destructuring

Extraction de valeurs depuis un objet ou un tableau en une seule ligne.

```javascript
// Objet
const { nom, age } = utilisateur;

// Tableau
const [premier, deuxieme] = tableau;

// Dans un paramètre de fonction
produits.map(({ nom, prix }) => nom);
```

### 3. Spread & Rest

Même syntaxe `...`, deux usages opposés.

```javascript
// Spread — étaler
const equipe = [...equipe1, ...equipe2];
const profilComplet = { ...profil, ville: "Charleroi" };

// Rest — regrouper
const additionner = (...nombres) => nombres.reduce((acc, n) => acc + n, 0);
```

### 4. map, filter, reduce

Les trois méthodes fondamentales pour manipuler des tableaux.

```javascript
// map — transformer chaque élément
const noms = produits.map(({ nom }) => nom);

// filter — garder certains éléments
const disponibles = produits.filter(({ disponible }) => disponible);

// reduce — construire une valeur finale
const total = produits.reduce((acc, { prix }) => acc + prix, 0);

// Chaînage
const totalDisponibles = produits
  .filter(({ disponible }) => disponible)
  .reduce((acc, { prix }) => acc + prix, 0);
```

### 5. Modules (import/export)

Découper le code en fichiers réutilisables.

```javascript
// Export nommé
export { additionner, multiplier };
import { additionner, multiplier } from "./maths.js";

// Export default
export default produits;
import mesProduits from "./produits.js";
```

---

## Structure du projet

```
js-phase3-es6/
├── index.html
├── maths.js       ← exports nommés : additionner, soustraire, multiplier
├── produits.js    ← export default : tableau de produits
├── script.js      ← point d'entrée, importe et utilise les modules
└── README.md
```

---

## Ce que j'ai appris

- Les arrow functions remplacent `function` pour un code plus court et lisible
- Le destructuring évite les répétitions (`tache.texte`, `tache.terminee` → `{ texte, terminee }`)
- Spread ne mute jamais l'original — il crée toujours un nouveau tableau ou objet
- `map`, `filter`, `reduce` se chaînent naturellement et remplacent la plupart des boucles `for`
- Chaque fichier JS est un module — `export` expose, `import` consomme
- Un fichier peut avoir plusieurs exports nommés mais **un seul** export default
- Les scopes isolés `{}` permettent de tester plusieurs concepts dans un même fichier sans conflits de variables

---

## Lien avec Vue.js

Tous ces concepts sont utilisés en permanence dans Vue.js :

| Concept ES6           | Utilisation dans Vue.js               |
| --------------------- | ------------------------------------- |
| Arrow functions       | Partout dans les composants           |
| Destructuring         | Props, store, composables             |
| Spread                | Fusion d'objets, mise à jour du state |
| map / filter / reduce | Listes dynamiques dans les templates  |
| import / export       | Chaque composant Vue est un module    |

---

## Technologies

- JavaScript ES6+
- Modules natifs (type="module")
