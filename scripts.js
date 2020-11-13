(() => {
    const score = document.querySelector(".score"),
        result = document.querySelector(".result"),
        choices = document.querySelectorAll(".choice");

    let userScore = 0,
        botScore = 0;

    const botChoice = () =>
        Math.floor(Math.random() * 1000) % 3 === 0 ?
        "rock" :
        Math.floor(Math.random() * 1000) % 3 === 1 ?
        "paper" :
        "scissors";

    const displayResults = (userChoice, robotChoice) => {
        score.querySelector(
            "#display-user"
        ).innerHTML = `<img src="imgs/${userChoice}.png" alt=${userChoice} id=${userChoice} />`;
        score.querySelector(
            "#display-bot"
        ).innerHTML = `<img src="imgs/${robotChoice}.png" alt=${robotChoice} id=${robotChoice} />`;
        score.querySelector("#user-score").textContent = userScore;
        score.querySelector("#bot-score").textContent = botScore;
    };

    const endGame = (x) => {
        if (x === "win") {
            result.innerHTML =
                "<span>You are <span style = 'color: rgb(11, 206, 11)'>victorious</span>!</span>";
        } else {
            result.innerHTML =
                "<span>You have been <span style = 'color:red'>defeated</span>!</span>";
        }
        restart = document.createElement("div");
        restart.textContent = `Play Again?`;
        restart.classList.add("btn-restart");
        result.insertAdjacentElement("beforebegin", restart);
        choices.forEach((choice) => {
            choice.removeEventListener("click", game);
        });
        restart.addEventListener("click", () => location.reload());
    };

    const game = (e) => {
        const robotChoice = botChoice();
        if (e.target.id === robotChoice) {
            result.textContent = `${e.target.id} and ${robotChoice}. It's a tie!`;
        } else if (e.target.id === "paper" && robotChoice === "rock") {
            result.textContent = `Paper covers rock. You win!`;
            userScore++;
        } else if (e.target.id === "paper" && robotChoice === "scissors") {
            result.textContent = `Scissors cuts paper. You lose!`;
            botScore++;
        } else if (e.target.id === "rock" && robotChoice === "paper") {
            result.textContent = `Paper covers rock. You lose!`;
            botScore++;
        } else if (e.target.id === "rock" && robotChoice === "scissors") {
            result.textContent = `Rock crushes scissors. You win!`;
            userScore++;
        } else if (e.target.id === "scissors" && robotChoice === "rock") {
            result.textContent = `Rock crushes scissors. You lose!`;
            botScore++;
        } else if (e.target.id === "scissors" && robotChoice === "paper") {
            result.textContent = `Scissors cuts paper. You win!`;
            userScore++;
        }
        displayResults(e.target.id, robotChoice);

        userScore >= 5 ? endGame("win") : botScore >= 5 ? endGame("lose") : false;
    };

    choices.forEach((choice) => choice.addEventListener("click", game));
})();