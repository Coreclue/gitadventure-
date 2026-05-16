// Helper function to draw cards from a deck
async function drawCards(deckId, count) {

  // Send request to draw cards
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`
  );

  // Convert response into JavaScript object
  const data = await response.json();

  // Return the array of cards
  return data.cards;
}

async function dealHands() {

  // Create a brand new deck
  const deckResponse = await fetch(
    "https://deckofcardsapi.com/api/deck/new/"
  );

  // Convert deck response into JavaScript object
  const deckData = await deckResponse.json();

  // Save the deck ID so we can keep using the same deck
  const deckId = deckData.deck_id;

  // Loop through 4 players
  for (let i = 1; i <= 4; i++) {

    // Draw 5 cards for current player
    const cards = await drawCards(deckId, 5);

    // Print player number
    console.log(`Player ${i}:`);

    // Loop through each card in the player's hand
    cards.forEach((card) => {

      // Print card value and suit
      console.log(`${card.value} of ${card.suit}`);
    });

    // Separator line for cleaner console output
    console.log("-------------");
  }
}

// Run the function
dealHands();