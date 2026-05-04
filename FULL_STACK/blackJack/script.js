let message = document.getElementById("message")
let playerCardsEl = document.getElementById("player-cards")
let dealerCardsEl = document.getElementById("dealer-cards")
let playerTotalEl = document.getElementById("player-total")
let dealerTotalEl = document.getElementById("dealer-total")
let chipsEl = document.getElementById("chips")

let startBtn = document.getElementById("start-btn")
let hitBtn = document.getElementById("hit-btn")
let standBtn = document.getElementById("stand-btn")
let resetBtn = document.getElementById("reset-btn")

let playerCards = []
let dealerCards = []
let chips = 100
let gameStarted = false
let gameOver = false

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1

    if (card === 1) {
        return 11
    } 
    else if (card > 10) {
        return 10
    } 
    else {
        return card
    }
}

function getTotal(cards) {
    let total = 0
    let aces = 0

    for (let i = 0; i < cards.length; i++) {
        total += cards[i]

        if (cards[i] === 11) {
            aces += 1
        }
    }

    while (total > 21 && aces > 0) {
        total -= 10
        aces -= 1
    }

    return total
}

function displayCards(cards, element) {
    element.innerHTML = ""

    for (let i = 0; i < cards.length; i++) {
        element.innerHTML += `<div class="card">${cards[i]}</div>`
    }
}

function startGame() {
    playerCards = [getRandomCard(), getRandomCard()]
    dealerCards = [getRandomCard(), getRandomCard()]

    gameStarted = true
    gameOver = false

    renderGame()
}

function hit() {
    if (gameStarted === false || gameOver === true) {
        return
    }

    playerCards.push(getRandomCard())

    if (getTotal(playerCards) > 21) {
        message.innerHTML = "Bust! You lost 😭"
        chips -= 10
        gameOver = true
    }

    renderGame()
}

function stand() {
    if (gameStarted === false || gameOver === true) {
        return
    }

    while (getTotal(dealerCards) < 17) {
        dealerCards.push(getRandomCard())
    }

    let playerTotal = getTotal(playerCards)
    let dealerTotal = getTotal(dealerCards)

    if (dealerTotal > 21) {
        message.innerHTML = "Dealer busts! You win 🎉"
        chips += 10
    } else if (playerTotal > dealerTotal) {
        message.innerHTML = "You win 🎉"
        chips += 10
    } else if (playerTotal < dealerTotal) {
        message.innerHTML = "Dealer wins 😭"
        chips -= 10
    } else {
        message.innerHTML = "Draw 🤝"
    }

    gameOver = true
    renderGame()
}

function resetGame() {
    playerCards = []
    dealerCards = []
    chips = 100
    gameStarted = false
    gameOver = false

    playerCardsEl.innerHTML = `
        <div class="card">A</div>
        <div class="card">10</div>
    `

    dealerCardsEl.innerHTML = `
        <div class="card hidden-card">?</div>
        <div class="card">7</div>
    `

    playerTotalEl.innerHTML = "21"
    dealerTotalEl.innerHTML = "?"
    chipsEl.innerHTML = chips
    message.innerHTML = "Want to play a round?"
}

function renderGame() {
    displayCards(playerCards, playerCardsEl)
    displayCards(dealerCards, dealerCardsEl)

    playerTotalEl.innerHTML = getTotal(playerCards)
    dealerTotalEl.innerHTML = getTotal(dealerCards)
    chipsEl.innerHTML = chips

    if (gameOver === false) {
        let total = getTotal(playerCards)

        if (total === 21) {
            message.innerHTML = "Blackjack! Press Stand 😎"
        } else {
            message.innerHTML = "Hit or Stand?"
        }
    }
}

startBtn.addEventListener("click", startGame)
hitBtn.addEventListener("click", hit)
standBtn.addEventListener("click", stand)
resetBtn.addEventListener("click", resetGame)