window.onload = function() {
    randomImg();
    randomImg2();
    winner();
}


var images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

function randomImg(){

var randomNumber1 = Math.floor(Math.random() * 6);

document.querySelector(".img1").setAttribute("src",src=images[(randomNumber1)]);
}

var images2 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

function randomImg2(){

var randomNumber2 = Math.floor(Math.random() * 6);

document.querySelector(".img2").setAttribute("src",src=images2[(randomNumber2)]);
}

function winner(){
    var randomNumber1 = Math.floor(Math.random() * 6);
    var randomNumber2 = Math.floor(Math.random() * 6);
    
     if ((randomNumber1)>(randomNumber2)) {
         document.querySelector("h1").innerHTML = "Player 1 Wins!"
     }

     else if ((randomNumber2)>(randomNumber1)){
         document.querySelector("h1").innerHTML = "Player 2 Wins!"
     }

     else {
        document.querySelector("h1").innerHTML = "DRAW"
     }

}