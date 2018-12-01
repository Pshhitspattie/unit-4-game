


var wins = 0;
var losses = 0;

var targetNumber = Math.floor(Math.random() * 150) + 60;
var number = 0;
var gemOne = Math.floor(Math.random () * 40) + 18;
var gemTwo = Math.floor(Math.random () * 10) + 2;
var gemThree = Math.floor(Math.random () * 30) + 10;
var gemFour = Math.floor(Math.random () * 20) + 1;

console.log(targetNumber);

function play() {

    $(".winning-number").text(targetNumber);
     targetNumber = Math.floor(Math.random() * 150) + 60;
    gemOne = Math.floor(Math.random () * 40) + 18;
    gemTwo = Math.floor(Math.random () * 10) + 2;
     gemThree = Math.floor(Math.random () * 30) + 10;
    gemFour = Math.floor(Math.random () * 20) + 1;
    number = 0;
    $(".total-number").html(number);
    $(".winning-number").html(targetNumber);
    

}



    