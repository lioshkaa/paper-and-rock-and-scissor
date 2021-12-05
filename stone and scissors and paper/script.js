const rock = document.querySelector(".rock");
const paper = document.querySelector(".papper");
const scissors = document.querySelector(".scissors");
const img = document.querySelector(".color");
const imgTwo = document.querySelector(".color_two");
const button = document.querySelector(".btn-again");
const modal = document.querySelector(".quiz-over-modal");
const modalTwo = document.querySelector(".modal");
const buttonClose = document.getElementById("btn-try-again");
const buttonClos = document.getElementById("btn-tr-again");
const game = () => {
  let playerScore = 0;
  let MachineScore = 0;
  let user = "";
  let comps = "";
  rock.addEventListener("click", () => {
    img.src = "img/Rock.png";
    user = "Камень";
    computer();
    compareHands(user, comps);
  });
  paper.addEventListener("click", () => {
    img.src = "img/paper.png";
    user = "Бумага";
    computer();
    compareHands(user, comps);
  });
  scissors.addEventListener("click", () => {
    img.src = "img/scissor.png";
    computer();
    user = "Ножницы";
    compareHands(user, comps);
  });
  document.querySelector(".out").innerHTML = user;
  function computer() {
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
      imgTwo.src = "img/Rock.png";
      comps = "Камень";
    } else if (computerChoice <= 0.67) {
      imgTwo.src = "img/paper.png";
      comps = "Бумага";
    } else {
      imgTwo.src = "img/scissor.png";
      comps = "Ножницы";
    }
  }
  button.addEventListener("click", () => {
    window.location.reload();
  });
  buttonClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });
  buttonClos.addEventListener("click", () => {
    modalTwo.classList.remove("active");
  });
  const compareHands = (playerChoice, compChoice) => {
    const winner = document.querySelector(".out");
    if (playerChoice === compChoice) {
      winner.textContent = "Ничья";
      return;
    }

    if (playerChoice === "Камень") {
      if (compChoice === "Ножницы") {
        winner.textContent = "Вы победили";
      } else {
        winner.textContent = "Компьютер победил";
      }
    }

    if (playerChoice === "Бумага") {
      if (compChoice === "Ножницы") {
        winner.textContent = "Компьютер победил";
      } else {
        winner.textContent = "Вы победили";
      }
    }

    if (playerChoice === "Ножницы") {
      if (compChoice === "Камень") {
        winner.textContent = "Компьютер победил";
      } else {
        winner.textContent = "Вы победили";
      }
    }
    if (winner.textContent === "Вы победили") {
      playerScore++;
      document.querySelector(".score-Player").innerHTML = playerScore;
    } else if (winner.textContent === "Компьютер победил") {
      MachineScore++;
      document.querySelector(".score-Machine").innerHTML = MachineScore;
    }
    if (playerScore === 10) {
      rock.classList.add("disabled");
      paper.classList.add("disabled");
      scissors.classList.add("disabled");
      modal.classList.add("active");
    }
    if (MachineScore === 10) {
      rock.classList.add("disabled");
      paper.classList.add("disabled");
      scissors.classList.add("disabled");
      modalTwo.classList.add("active");
    }
  };
};

game();
