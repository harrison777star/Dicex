

  /*Player One*/
  
var random1 = Math.floor(Math.random() * 6) + 1;
if(random1 == 1){
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
}

else if(random1 == 2){
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
}

else if(random1 == 3){
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
}

else if(random1 == 4){
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
}

else if(random1 == 5){
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
}

else{
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
}

/*Player Two*/
var random2 = Math.floor(Math.random() * 6) + 1;
if(random2 == 1){
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
}

else if(random2 == 2){
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
}

else if(random2 == 3){
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
}

else if(random2 == 4){
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
}

else if(random2 == 5){
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
}

else{
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}

/*Result*/

let result = document.querySelector('h1');

if(random1 > random2){
  result = document.querySelector('h1').textContent="🏁Player One Wins";
}

else if(random2 > random1){
  result = document.querySelector('h1').textContent="🏁Player Two Wins";
  
}

else{
  result = document.querySelector('h1').textContent="🎌It's a tie";
}


