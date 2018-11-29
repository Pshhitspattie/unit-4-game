$(document).ready(function() {

var wins = 0;
var losses = 0;

var targetNumber = Math.floor(Math.random() * 150) + 60;
var totalNumber = 0;
var gemOne = Math.floor(Math.random () * 40) + 18;
var gemTwo = Math.floor(Math.random () * 10) + 2;
var gemThree = Math.floor(Math.random () * 30) + 10;
var gemFour = Math.floor(Math.random () * 20) + 1;

console.log(targetNumber);
console.log(gemOne);
console.log(wins);
console.log(losses);
console.log(totalNumber);
console.log(gemTwo);
console.log(gemThree);
console.log(gemFour);

var winningScore = function(){
    if (totalNumber === targetNumber) {
        wins++
        $('.Wins').text(wins);
        reset();
     } else if (totalNumber > targetNumber) {
         losses++
         $('.Losses').text(losses);
         reset()
     }
    var reset = function(){
var targetNumber = Math.floor(Math.random() * 150) + 60;
var totalNumber = 0;
var gemOne = Math.floor(Math.random () * 40) + 18;
var gemTwo = Math.floor(Math.random () * 10) + 2;
var gemThree = Math.floor(Math.random () * 30) + 10;
var gemFour = Math.floor(Math.random () * 20) + 1;
$('.winningNumber').text(targetNumber);
$('.totalNumber').text("");

     };
    $('.winningNumber').html(targetNumber);

    $('#firstClick').click(function() {
         totalNumber = totalNumber + gemOne;
         $('.totalNumber').text(totalNumber);
         winningScore()
         console.log("gemOne" + gemOne);

    });
    
    $('#secondClick').click(function(){
        totalNumber = totalNumber + gemTwo;
        $('totalNumber').text(totalNumber);
        winningScore()

    });
        
};
console.log(targetNumber);
console.log(wins);
console.log(losses);

});
