const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  console.log("Welcome to the Guessing Game!")
  let answer = rls.keyInYN("Wanna Play?")
  if (answer) {
    console.log("Let's start!")
    gameLoop()
   }else {
    console.log("Have a nice life!")
    quitGame()
     }
}



/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 * 
 * @returns {undefined}
 */
const quitGame = () => {
   console.log("Goodbye!")
    process.exit()
}

/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 * 
 * @returns {undefined}
 */
const gameLoop = () => {
 console.log("I have a random number in mind")
 console.log("It's between 1 and 1000")
 console.log("You have 10 guesses total")
 let guess = rls.questionInt()
 let random = Math.floor(Math.random() * 1000 + 1)
 //let guessCount = 10
 //while (guessCount >= 0){
 // if (guessCount === 0) {
//    console.log("You lose")
//    quitGame()
//   }
  if (guess === random) {
    console.log("Congrats! You got it right!")
    let goAgain = rls.keyInYN("Another go?")
    if (goAgain) {
     // guessCount--
      gameLoop()
   }  else {
      quitGame()
   }
 }
  if (guess > random) {
    console.log("Your guess is too high")
    let goAgain = rls.keyInYN("Another go?")
    if (goAgain) {
     // guessCount--
      gameLoop()
   } else {
      quitGame()
   }
 }
  else if (guess < random) {
    console.log("Your guess is too low")
    let goAgain = rls.keyInYN("Another go?")
    if (goAgain) {
     // guessCount--
      gameLoop()
    }  else {
      quitGame()
    }
  }
// }
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let random = Math.floor(Math.random() * 1000 + 1)
  return random
}
console.log(startGame())


module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}