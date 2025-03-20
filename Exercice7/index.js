function convertToBinary() {
    const decimalInput = document.getElementById("decimalInput").value;
    const binaryResult = document.getElementById("binaryResult");
  
    // Vérifier si l'entrée est un nombre valide
    if (!/^\d+$/.test(decimalInput)) {  // Utilise une expression régulière pour vérifier si la chaîne contient uniquement des chiffres
      binaryResult.textContent = ""; // Efface le résultat précédent si l'entrée n'est pas valide
      return;
    }
  
    let decimal = parseInt(decimalInput);
    let binary = "";
  
    if (decimal === 0) {
      binary = "0";
    } else {
      while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
      }
    }
  
    binaryResult.textContent = binary;
  }