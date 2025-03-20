function calculate(nombre1, nombre2, operateur) {
    // Conversion des entrées en nombres
    const num1 = Number(nombre1);
    const num2 = Number(nombre2);
  
    // Vérification de l'opérateur fourni
    switch (operateur) {
      case '+': // Addition
        return num1 + num2;
      case '-': // Soustraction
        return num1 - num2;
      case '*': // Multiplication
        return num1 * num2;
      case '/': // Division
        if (num2 === 0) { // Vérification de la division par zéro
          return "Division by zero is not allowed";
        }
        return num1 / num2;
      default: // Cas où l'opérateur est invalide
        return "Invalid operator";
    }
  }
  
  
  // Exemples d'utilisation de la fonction
  console.log(calculate(5, 3, '+')); // Résultat : 8
  console.log(calculate(10, 4, '-')); // Résultat : 6
  console.log(calculate(4, 6, '*')); // Résultat : 24
  console.log(calculate(15, 3, '/')); // Résultat : 5
  console.log(calculate(8, 0, '/')); // Résultat : "Division par zéro impossible"
  console.log(calculate(4, 5, '%')); // Résultat : "Opérateur non valide"
  
  export default calculate;