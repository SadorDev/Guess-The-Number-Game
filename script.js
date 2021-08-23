"use strict";

// document.querySelector('.number').textContent = 20;
// document.querySelector('.number').textContent = 20;

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number! 🚫";

    // Whenplayer wins
  } else if (guess === number) {
    document.querySelector(".message").textContent =
      "Correct Number! Well Done 🎉";

      document.querySelector('body').style.backgroundColor = '#C623d6';

      document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose👎🏾";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    document.querySelector(".message").textContent = "Too Low!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
