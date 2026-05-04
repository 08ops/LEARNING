var options = ["rock", "paper", "scissors"]
var chosen = Math.floor(Math.random() * 3)
console.log(options[chosen])
while (true) {
    var player1 = prompt("Player 1: Enter rock, paper, or scissors").toLowerCase()
    var player2 = prompt("Player 2: Enter rock, paper, or scissors").toLowerCase()
    if (player1 === "quit" || player2 === "quit") {
        break
    }
    if (player1 === player2) {
        alert("It's a tie!")
    } else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")
    ) {
        alert("Player 1 wins!")
    } else {
        alert("Player 2 wins!")
    }
}