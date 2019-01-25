function rockPaperScissors() {
  var player = document.getElementById("playerChoice").value;
  var computer = (Math.floor(Math.random() * 3)); // 0 = Rock, 1 = Paper, 2 = Scissors
  var outcome = "Not yet defined";
  if(player == "rock" && computer == 0) {
    computer = "rock";
    outcome = "Tie!";
  } else if(player == "rock" && computer == 1) {
    computer = "paper";
    outcome = "You Lose :(";
  } else if(player == "rock" && computer == 2) {
    computer = "scissors";
    outcome = "You Win :)";
  } else if(player == "paper" && computer == 0) {
    computer = "rock";
    outcome = "You Win :)";
  } else if(player == "paper" && computer == 1) {
    computer = "paper";
    outcome = "Tie!";
  } else if(player == "paper" && computer == 2) {
    computer = "scissors";
    outcome = "You Lose :(";
  } else if(player == "scissors" && computer == 0) {
    computer = "rock";
    outcome = "You Lose :(";
  } else if(player == "scissors" && computer == 1) {
    computer = "paper";
    outcome = "You Win :)";
  } else if(player == "scissors" && computer == 2) {
    computer = "scissors";
    outcome = "Tie!";
  };
  document.getElementById("youPlayed").innerHTML = "You played: " + player;
  document.getElementById("computerPlayed").innerHTML = "Computer played: " + computer;
  document.getElementById("winnerIs").innerHTML = outcome;
  // console.log("You played: " + player);
  // console.log("Computer played: " + computer);
  // console.log(outcome);
};

document.getElementById("play").onclick = function() {
  rockPaperScissors();
};
