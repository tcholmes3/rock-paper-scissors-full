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

    const game = (e) => {
        console.log(e.target.id);
        const robotChoice = botChoice();
        if (e.target.id === robotChoice) {
            result.textContent = `${e.target.id} and ${robotChoice}. It's a tie!`;
            score.querySelector(
                "#display-user"
            ).innerHTML = `<img src="imgs/${e.target.id}.png" alt=${e.target.id} id=${e.target.id} />`;
            score.querySelector(
                "#display-bot"
            ).innerHTML = `<img src="imgs/${robotChoice}.png" alt=${robotChoice} id=${robotChoice} />`;
        } else if (e.target.id === "paper" && robotChoice === "rock") {
            result.textContent = `Paper covers rock. You win!`;
            score.querySelector(
                "#display-user"
            ).innerHTML = `<img src="imgs/${e.target.id}.png" alt=${e.target.id} id=${e.target.id} />`;
            score.querySelector(
                "#display-bot"
            ).innerHTML = `<img src="imgs/${robotChoice}.png" alt=${robotChoice} id=${robotChoice} />`;
            userScore++;
        } else if (e.target.id === "paper" && robotChoice === "scissors") {
            result.textContent = `Scissors cuts paper. You lose!`;
            score.querySelector(
                "#display-user"
            ).innerHTML = `<img src="imgs/${e.target.id}.png" alt=${e.target.id} id=${e.target.id} />`;
            score.querySelector(
                "#display-bot"
            ).innerHTML = `<img src="imgs/${robotChoice}.png" alt=${robotChoice} id=${robotChoice} />`;
            botScore++;
        } else if (e.target.id === "rock" && robotChoice === "paper") {
            result.textContent = `Paper covers rock. You lose!`;
            score.querySelector(
                "#display-user"
            ).innerHTML = `<img src="imgs/${e.target.id}.png" alt=${e.target.id} id=${e.target.id} />`;
            score.querySelector(
                "#display-bot"
            ).innerHTML = `<img src="imgs/${robotChoice}.png" alt=${robotChoice} id=${robotChoice} />`;
            botScore++;
        } else if (e.target.id === "rock" && robotChoice === "scissors") {
            result.textContent = `Rock crushes scissors. You win!`;
            score.querySelector(
                "#display-user"
            ).innerHTML = `<img src="imgs/${e.target.id}.png" alt=${e.target.id} id=${e.target.id} />`;
            score.querySelector(
                "#display-bot"
            ).innerHTML = `<img src="imgs/${robotChoice}.png" alt=${robotChoice} id=${robotChoice} />`;
            userScore++;
        } else if (e.target.id === "scissors" && robotChoice === "rock") {
            result.textContent = `Rock crushes scissors. You lose!`;
            score.querySelector(
                "#display-user"
            ).innerHTML = `<img src="imgs/${e.target.id}.png" alt=${e.target.id} id=${e.target.id} />`;
            score.querySelector(
                "#display-bot"
            ).innerHTML = `<img src="imgs/${robotChoice}.png" alt=${robotChoice} id=${robotChoice} />`;
            botScore++;
        } else if (e.target.id === "scissors" && robotChoice === "paper") {
            result.textContent = `Scissors cuts paper. You win!`;
            score.querySelector(
                "#display-user"
            ).innerHTML = `<img src="imgs/${e.target.id}.png" alt=${e.target.id} id=${e.target.id} />`;
            score.querySelector(
                "#display-bot"
            ).innerHTML = `<img src="imgs/${robotChoice}.png" alt=${robotChoice} id=${robotChoice} />`;
            userScore++;
        }
        score.querySelector("#user-score").textContent = userScore;
        score.querySelector("#bot-score").textContent = botScore;
        userScore >= 5 ?
            (result.innerHTML =
                "<span>You are <span style = 'color:green'>victorious</span>!</span>") :
            botScore >= 5 ?
            (result.innerHTML =
                "<span>You have been <span style = 'color:red'>defeated</span>!</span>") :
            false;
    };

    choices.forEach((choice) => choice.addEventListener("click", game));
})();