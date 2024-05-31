// @ts-nocheck
function convertToBinary() {
  // Récupérer la valeur entrée par l'utilisateur
  const decimalInput = document.getElementById("decimalInput").value;

  // Convertir la valeur en nombre entier
  const decimalNumber = parseInt(decimalInput, 10);

  // Vérifier si l'entrée est un nombre valide
  if (isNaN(decimalNumber)) {
    document.getElementById("binaryResult").textContent =
      "Veuillez entrer un nombre décimal valide.";
    return;
  }

  // Convertir le nombre décimal en binaire
  const binaryResult = decimalNumber.toString(2);

  // Afficher le résultat de la conversion
  document.getElementById("binaryResult").textContent =
    "Représentation binaire : " + binaryResult;
}
