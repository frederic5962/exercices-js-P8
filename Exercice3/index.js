function calculateAverage(numbers = []) {
    // Vérifier si le tableau est vide
    if (numbers.length === 0) {
      return "No numbers to calculate average";
    }
    
    let sum = 0;
    
    // Parcours du tableau pour calculer la somme
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    
    // Retourner la moyenne
    return sum / numbers.length;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(calculateAverage([5, 10, 15]));      // Affiche : 10
  console.log(calculateAverage([10, 20, 30, 20]));   // Affiche : 20
  console.log(calculateAverage());                   // Affiche : "No numbers to calculate average"
  
  export default calculateAverage;
