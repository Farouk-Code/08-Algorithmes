// @ts-nocheck
// Fonction pour ajouter du texte à l'écran de la calculatrice
function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Fonction pour effacer l'écran de la calculatrice
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

// Fonction pour calculer et afficher le résultat
function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Erreur";
  }
}
