//votre code ici
function pairNumbers(min, max) {
    let result = "";
  
    if (min > max) {
      return result;
    }
  
    for (let i = min; i <= max; i++) {
      if (i % 2 === 0) {
        result += i + ",";
      }
    }
  
    // Supprimer la dernière virgule
    return result.slice(0, -1);
  }
  
  export default pairNumbers;

