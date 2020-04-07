/*
🚨Game Overview🚨

- The game is played in the browser
- The user is asked their name via the `prompt()` function. Their name is stored for later use.
- Questions and answers are stored in variables (only basic types are used).
- The user's score is initially zero. If they get the the answer correct, the score increases.
- The user submits their answers via the `prompt()` function.
- At the end of each answer, the score will either increase or stay the same, and the next question will appear.
- Once the user has answered all of the questions, an `alert()` function will trigger, letting them know their score given in the following format:

- **0-2** "Oh wow {name}, you can do better."
- **3-4** "Keep practicing {name}, you got this!"
- **5** "Wow {name}, a perfect score!"
*/

const name = prompt(`Enter your name: `);
console.log(name);

const question1 = `What is the instructor's name? `;
const answer1 = `Michael`;

const question2 = `How old is the instructor? `;
const answer2 = `31`;

let userScore = 0;

const userAnswer1 = prompt(question1);
if (userAnswer1 === answer1) {
  userScore = userScore + 1;
}

const userAnswer2 = prompt(question2);
if (userAnswer2 === answer2) {
  userScore = userScore + 1;
} else if (userScore === 0) {
  alert(`${name}, you need more practice!`);
}

if (userScore === 1) {
  alert(`${name}, close!`);
}

if (userScore === 2) {
  alert(`${name}, Awesome job!  Perfect!`);
}
