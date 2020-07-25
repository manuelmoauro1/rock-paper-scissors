// 1 = paper, 2 = rock, and 3 = scissors.
document.addEventListener("DOMContentLoaded", function () {
    "use strict"
    let pResults = document.getElementById("results");
    let wins = 0;
    function jsChoice () {
        let choice = Math.floor(Math.random() * 3) + 1;
        return choice;
    }
    document.getElementById("paper").addEventListener("click", () => {
        let choice = jsChoice();
        if (choice == 3) {
            pResults.innerHTML = "Computer took's scissors and won!" + " Your score is: " + wins;
        }
        else if (choice == 2) {
            wins++;
            pResults.innerHTML = "You won! Computer took's rock." + " Your score is: " + wins;
        }
        else {
            pResults.innerHTML = "Tie! No winner." + " Your score is: " + wins;
        }
        document.getElementById("score").innerHTML = wins;
    });
    document.getElementById("rock").addEventListener("click", () => {
        let choice = jsChoice();
        if (choice == 1) {
            pResults.innerHTML = "Computer took's paper and won!" + " Your score is: " + wins;
        }
        else if (choice == 3) {
            wins++;
            pResults.innerHTML = "You won! Computer took's scissors." + " Your score is: " + wins;
        }
        else {
            pResults.innerHTML = "Tie! No winner." + " Your score is: " + wins;
        }
        document.getElementById("score").innerHTML = wins;
    });
    document.getElementById("scissors").addEventListener("click", () => {
        let choice = jsChoice();
        if (choice == 2) {
            pResults.innerHTML = "Computer took's rock and won!" + " Your score is: " + wins;
        }
        else if (choice == 1) {
            wins++;
            pResults.innerHTML = "You won! Computer took's paper." + " Your score is: " + wins;
        }
        else {
            pResults.innerHTML = "Tie! No winner." + " Your score is: " + wins;
        }
        document.getElementById("score").innerHTML = wins;
    });
    document.getElementById("rules").addEventListener("click", () => {
        document.getElementById("imgRules").classList.remove("hidden");
        document.getElementById("game").classList.add("hidden");
    });
    document.getElementById("close").addEventListener("click", () => {
        document.getElementById("imgRules").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");

    });
});