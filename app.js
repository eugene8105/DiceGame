
var scores, roundScore, activePlayer, dice, gamePlaying;
init();

// anonymous function - function inside without the name.
document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;

        // "block" will display the item
        //                     querySelector(".class name")
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";

        // 3. Update the round score IF the rolled number was NOT a 1;
        if (dice != 1) {
            // adding scores
            roundScore += dice;
            //       querySelector("# ID name")
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }
    }
    
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;
    
        // update the UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        // check if playe won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        }
        else {
            // next player
            nextPlayer();
        }
    }
    
});

function nextPlayer() {
    // if active Player equal 0 then it will change to 1 else will change to 0
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // toggle will change if it's on it will be off and vice versa
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = "none";

    // with ID getElementById works faster.
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
   
    document.querySelector(".player-0-panel").classList.add("active");
};

