var userName = prompt("What's your name?");
var userAge = prompt("How old are you?");

var nameDiv = document.querySelector(".user-name");
nameDiv.textContent += " " + userName;
nameDiv.textContent = nameDiv.textContent + " " + userName;

// get information from within HTML

nameDiv.innerHTML += "<h1>" + userName + "</h1>";

var ageDiv = document.querySelector(".user-age");
ageDiv.textContent = userAge;

var myDiv = document.querySelector(".second-div");

myDiv.textContent = "I am too! =)";

// or  you can do the following

// document.querySelector(".second-div").textContent = "I am too! =)";
