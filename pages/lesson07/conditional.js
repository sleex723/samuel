var age = prompt("What is your age?");

if (age >= 18) {
  alert("He's of age!");
} else if( age < 18){
  alert("He needs to leave!")
  // This is wrong because it would hit the line above before
} else if(age < 18 && age > 16) {
  alert("Almost of age!");
} else {
  alert("Please enter a number");
}

var name = prompt("What's your name?");

if ((name === 'Joe' || name === 'Jack') && age >= 21) {
  alert("Welcome " + name);
} else {
  alert("Denied");
}

//turnary operator
var isAlive = !!prompt("Is he alive?");
var x = (isAlive) ? alert("HES ALIVE!"): alert("HE'S DEAD...");
