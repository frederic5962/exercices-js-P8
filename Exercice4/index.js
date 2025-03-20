// Sélectionnez le bouton et le paragraphe
const button = document.getElementById("myButton");

// Ajoutez un écouteur d'événements pour le clic sur le bouton
button.addEventListener("click", function() {
  // Créez un nouvel élément de paragraphe
  const paragraph = document.createElement("p");
  paragraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";

  // Ajoutez le paragraphe au corps du document
  document.body.appendChild(paragraph);
});