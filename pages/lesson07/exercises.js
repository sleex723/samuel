// Write an if statement that always runs its code block
// Write an if statement that never runs its code block
// Write a statement that logs a message of encouragement if a visitor, when prompted, responds that they are sad.
// Write a statement that alerts a warning if a visitor, when prompted, does not guess that the secret number is 3.
// Prompt the visitor to enter a password when they visit your site. If it is correct, welcome them. Otherwise, direct them elsewhere using this line of code:
// window.location = "http://www.google.com"; (This code will not work in repl.it, you'll need to use a <script> tag or the JavaScript console)

var emotions = prompt("How are you feeling?");
if(emotions === "sad"){
  alert("don't be sad");
} else {
  alert("I'm glad you're not sad!");
}

var password = parseInt(prompt("What's the secret password?"));

if(password === 3){
  alert("Good job! You guessed the password");
} else {
  window.location = "http://www.google.com";
}


var hero = 'strong';
var bad_guy = 'stronger';

if(hero === 'strong') {
  if(bad_guy === 'weak') {
    console.log('Ah-ha, an easy victory!');
  }
  console.log("Let us battle to the death!");
}
