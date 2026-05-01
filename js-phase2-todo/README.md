# JS Phase 2 — Manipulation du DOM

Apprentissage de la manipulation du DOM en JavaScript pur, avec un projet concret : une **Todo List interactive** avec persistance des données.

---

## Concepts couverts

- Sélectionner des éléments HTML depuis JS (`getElementById`, `querySelector`)
- Modifier le contenu et le style (`textContent`, `classList`, `style`)
- Écouter les événements utilisateur (`addEventListener`)
- Créer et supprimer des éléments dynamiquement (`createElement`, `appendChild`, `remove`)
- Sauvegarder des données dans le navigateur (`localStorage`)
- Séparer les responsabilités entre fonctions (`ajouterTache`, `afficherTache`, `sauvegarder`)

---

## Projet — Todo List interactive

Une application de gestion de tâches entièrement en JavaScript pur (sans framework).

### Fonctionnalités

- Ajouter une tâche via un champ texte
- Cocher une tâche comme terminée (texte barré)
- Supprimer une tâche
- Persistance des données via `localStorage` — les tâches survivent au rechargement de la page

### Structure du projet

```
js-phase2-todo/
├── index.html
├── style.css
├── script.js
└── README.md
```

### Architecture du code

| Fonction                | Rôle                                                  |
| ----------------------- | ----------------------------------------------------- |
| `ajouterTache(contenu)` | Crée l'objet tâche, l'ajoute au tableau et sauvegarde |
| `afficherTache(tache)`  | Construit et injecte le `li` dans le DOM              |
| `sauvegarder()`         | Écrit le tableau de tâches dans le localStorage       |

---

## Ce que j'ai appris

- Le DOM est la représentation de la page HTML accessible depuis JS
- `const` sur un tableau ou un objet n'empêche pas de modifier son contenu
- `filter()` permet de supprimer un élément d'un tableau sans muter l'original
- Le localStorage ne stocke que du texte — `JSON.stringify()` et `JSON.parse()` sont indispensables pour y stocker des objets
- Séparer les responsabilités entre fonctions rend le code plus lisible et maintenable
- Nommer les paramètres de façon distincte des clés d'objets évite les confusions

---

## Technologies

- HTML5
- CSS3
- JavaScript ES6 (vanilla — aucun framework)
