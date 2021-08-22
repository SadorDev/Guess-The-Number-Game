'use strict'

// document.querySelector('.number').textContent = 20;
// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 50;

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number! 🚫';
        } else if (guess === number) {
        document.querySelector('.message').textContent = 'Correct Number! Well Done 🎉';
        } else if (guess > number) {
        document.querySelector('.message').textContent = 'Too High!';
        } else if (guess < number) {
        document.querySelector('.message').textContent = 'Too Low!';
    }
});