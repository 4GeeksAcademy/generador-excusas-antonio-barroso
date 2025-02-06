import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
  let action = ['ate ', 'peed ', 'crushed ', 'broke '];
  let what = ['my homework ', 'my phone ', 'the car '];
  let when = ['before the class!', 'when I was sleeping!', 'while I was exercising!', 'during my lunch!', 'while I was praying!'];

  function randomizer(arr) {
    return Math.floor(Math.random() * arr.length)
  }

  const excuse = who[randomizer(who)] +  
  action[randomizer(action)] +  
  what[randomizer(what)] +  
  when[randomizer(when)];

  document.querySelector("#excuse").innerHTML = excuse;
  console.log("Hello Rigo from the console!");
};
