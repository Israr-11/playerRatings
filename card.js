import players from './players.js';


// Function to create player cards
function createPlayerCards() {
  const playerCardsContainer = document.getElementById("player-cards");

  // Loop through each player in the player data
  players.forEach(function(player) {
      // Create player card element
      const playerCard = document.createElement("div");
      playerCard.classList.add("player-card");

 // Create and append player name
 const playerName = document.createElement("h2");
 playerName.textContent = `${player.firstName} ${player.lastName}`; // Concatenate firstName and lastName
 playerCard.appendChild(playerName);

     // Create and append profile picture (if you have a way to determine the image path)
     const profilePic = document.createElement("div");
     profilePic.classList.add("profile-pic");
     const profilePicImage = document.createElement("img");
     profilePicImage.src = `./iimages/${player.firstName.toLowerCase()}_${player.lastName.toLowerCase()}.jpg`; // Example image path
     profilePic.appendChild(profilePicImage);
     playerCard.appendChild(profilePic);

      // Create player rating buttons container
      const ratingContainer = document.createElement("div");
      ratingContainer.classList.add("player-info-score");
      
      // Create rating buttons for each player
      for (let i = 1; i <= 10; i++) {
          const ratingButton = document.createElement("button");
          ratingButton.classList.add("rating-score-btn");
          ratingButton.setAttribute("data-value", i);
          ratingButton.textContent = i;
          
          // Add click event listener to each rating button
  ratingButton.addEventListener("click", function() {
  // Reset background color of all buttons in the same player card to black
  const buttonsInSameCard = playerCard.querySelectorAll(".rating-score-btn");
  buttonsInSameCard.forEach(function(btn) {
      btn.style.backgroundColor = "";
      btn.style.color = ""; // Reset color to black
  });
  
  // Set background color of the clicked button to red
  this.style.backgroundColor = "red";
  this.style.color = "white";
});
          
          ratingContainer.appendChild(ratingButton);
      }

      // Append rating buttons to player card
      playerCard.appendChild(ratingContainer);

      // Append player card to container
      playerCardsContainer.appendChild(playerCard);
  });
}

// Call the function to create player cards when the page loads
window.onload = createPlayerCards;