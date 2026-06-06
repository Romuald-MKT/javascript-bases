
import questions from "./questions.js";

/* Étape 1 — Sélectionner les éléments et importer les questions */

// Écrans
const ecranDepart = document.getElementById("ecranDepart");
const ecranQuestion = document.getElementById("ecranQuestion");
const ecranResultat = document.getElementById("ecranResultat");

// Éléments de la question
const numeroQuestion = document.getElementById("numeroQuestion");
const texteQuestion = document.getElementById("texteQuestion");
const listeChoix = document.getElementById("listeChoix");
const timerAffichage = document.getElementById("timer");
const scoreEnCours = document.getElementById("scoreEnCours");

// Éléments du résultat
const scoreFinal = document.getElementById("scoreFinal");
const appreciation = document.getElementById("appreciation");

// Boutons
const btnCommencer = document.getElementById("btnCommencer");
const btnRejouer = document.getElementById("btnRejouer");

// Variables d'état du quiz
let indexQuestion = 0;
let score = 0;
let timer = null;
let tempsRestant = 15;

/* Étape 2 — Démarrer le quiz */

btnCommencer.addEventListener("click", () => {
  ecranDepart.classList.add("cache");
  ecranQuestion.classList.remove("cache");
  afficherQuestion();
});

const afficherQuestion = () => {
  // Récupérer la question courante
  const questionCourante = questions[indexQuestion];

  // Mettre à jour le numéro de question
  numeroQuestion.textContent = `Question ${indexQuestion + 1}/${questions.length}`;

  // Mettre à jour le texte de la question
  texteQuestion.textContent = questionCourante.question;

  // Vider les choix précédents
  listeChoix.innerHTML = "";

  // Créer un bouton pour chaque choix
  questionCourante.choix.forEach((choix, index) => {
    const btn = document.createElement("button");
    btn.textContent = choix;
    btn.classList.add("btnChoix");
    btn.addEventListener("click", () => verifierReponse(index));
    listeChoix.appendChild(btn);
  });

  // Démarrer le timer
  demarrerTimer();
};

const demarrerTimer = () => {
  tempsRestant = 15;
  timerAffichage.textContent = `⏱ ${tempsRestant}s`;

  timer = setInterval(() => {
    tempsRestant--;
    timerAffichage.textContent = `⏱ ${tempsRestant}s`;

    if (tempsRestant === 0) {
      clearInterval(timer);
      questionSuivante(); // temps écoulé → question suivante
    }
  }, 1000);
};

const verifierReponse = (indexChoix) => {
  clearInterval(timer); // stopper le timer

  const questionCourante = questions[indexQuestion];
  const boutons = document.querySelectorAll(".btnChoix");

  // Désactiver tous les boutons
  boutons.forEach(btn => btn.disabled = true);

  // Colorier la bonne et la mauvaise réponse
  boutons[questionCourante.bonneReponse].classList.add("correct");

  if (indexChoix === questionCourante.bonneReponse) {
    score++;
    scoreEnCours.textContent = `Score : ${score}`;
  } else {
    boutons[indexChoix].classList.add("incorrect");
  }

  // Passer à la question suivante après 1.5s
  setTimeout(() => questionSuivante(), 1500);
};

const questionSuivante = () => {
  indexQuestion++;

  if (indexQuestion < questions.length) {
    afficherQuestion();
  } else {
    afficherResultat();
  }
};

const afficherResultat = () => {
  ecranQuestion.classList.add("cache");
  ecranResultat.classList.remove("cache");

  scoreFinal.textContent = `${score} / ${questions.length}`;

  // Message selon le score
  if (score === questions.length) {
    appreciation.textContent = "Parfait ! Tu maîtrises les bases du JS 🏆";
  } else if (score >= questions.length / 2) {
    appreciation.textContent = "Pas mal ! Continue à pratiquer 💪";
  } else {
    appreciation.textContent = "Courage ! Relis les concepts et réessaie 📖";
  }
};

// Rejouer
btnRejouer.addEventListener("click", () => {
  indexQuestion = 0;
  score = 0;
  scoreEnCours.textContent = "Score : 0";
  ecranResultat.classList.add("cache");
  ecranDepart.classList.remove("cache");
});