document.addEventListener("DOMContentLoaded", function () {
    
  const gameBoard = document.getElementById("game-board");
  const message = document.getElementById("message");
  const winnerMessage = document.getElementById("winner-message");
  const restartButton = document.getElementById("restart-button");

  const cards = "AABBCCDDEEFFGGHH".split("");

  cards.sort(() => Math.random() - 0.5);

  function createGameBoard() {
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">?</div>
                    <div class="card-back">${card}</div>
                </div>
            `;
      gameBoard.appendChild(cardElement);
    });
  }

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  let matchesFound = 0;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
    } else {
      secondCard = this;
      checkForMatch();
    }
  }

  function checkForMatch() {
    let isMatch =
      firstCard.querySelector(".card-back").textContent ===
      secondCard.querySelector(".card-back").textContent;

    if (isMatch) {
      disableCards();
      showMessage("Great job! It's a match!", 3000);
      matchesFound++;
      if (matchesFound === 8) {
        setTimeout(showWinnerMessage, 1000);
      }
    } else {
      unflipCards();
      showMessage("Try again!", 2000);
    }
  }

  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1000);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  function showMessage(text, duration) {
    message.textContent = text;
    message.classList.remove("fade-out");
    setTimeout(() => {
      message.classList.add("fade-out");
    }, duration);
  }

  function showWinnerMessage() {
    winnerMessage.style.display = "block";
    restartButton.style.display = "block";
  }

  window.restartGame = function () {
    gameBoard.innerHTML = "";
    winnerMessage.style.display = "none";
    restartButton.style.display = "none";
    matchesFound = 0;
    message.textContent = "Good luck!";
    message.classList.remove("fade-out");
    cards.sort(() => Math.random() - 0.5);
    createGameBoard();
    document
      .querySelectorAll(".card")
      .forEach((card) => card.addEventListener("click", flipCard));
  };

  createGameBoard();
  document
    .querySelectorAll(".card")
    .forEach((card) => card.addEventListener("click", flipCard));
});
