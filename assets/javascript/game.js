var winningNumber = Math.floor(Math.random() * 150) + 60;
var catScore = 0;
var firstClick = Math.floor(Math.random () * 40) + 18;
var secondClick = Math.floor(Math.random () * 10) + 2;
var thirdClick = Math.floor(Math.random () * 30) + 10;
var fourthClick = Math.floor(Math.random () * 20) + 1;
var wins = 0;
var losses = 0;

console.log(winningNumber);

$(document).ready(function () {

function gameReset () {
    $("#winning-number").html(winningNumber);
    winningNumber = Math.floor(Math.random() * 150) + 60;
    catScore = 0;
    firstClick = Math.floor(Math.random () * 40) + 18;
    secondClick = Math.floor(Math.random () * 10) + 2;
    thirdClick = Math.floor(Math.random () * 30) + 10;
    fourthClick = Math.floor(Math.random () * 20) + 1;

}

$("#winning-number").html(winningNumber);
$("#Wins").html(wins);
$("#Losses").html(losses);

$("#firstClick").click(function (event) {
    catScore = catScore + firstClick;
    $(firstClick).text(catScore);
    $("#total-number").html(catScore);
    if (catScore === winningNumber) {
        alert("You won! Meow");
        wins++
        $("#Wins").html(wins);
        gameReset();
    } else if (catScore > winningNumber) {
        alert("Hisssss, you lost");
        losses++
        $("#Losses").html(losses);
        gameReset();
    }
});

$("#secondClick").click(function (event){
    catScore = catScore + secondClick;
    $(secondClick).text(catScore);
    $("#total-number").html(catScore);
    if (catScore === winningNumber) {
        alert("You won! Meow");
        wins++
        $("#Wins").html(wins);
        gameReset();
    } else if (catScore > winningNumber) {
        alert("Hisssss, you lost");
        losses++
        $("#Losses").html(losses);
        gameReset();
    }


});

$("#thirdClick").click(function (event) {
    catScore = catScore + thirdClick;
    $(thirdClick).text(catScore);
    $("#total-number").html(catScore);
    if (catScore === winningNumber) {
        alert("You won! Meow");
        wins++
        $("#Wins").html(wins);
     } else if (catScore > winningNumber) {
        alert("Hissss, you lost");
        losses++
        $("#Losses").html(losses);
        gameReset();
     }

});

$("#fourthClick").click(function (event) {
    catScore = catScore + fourthClick;
    $(fourthClick).text(catScore);
    $("#total-number").html(catScore);
    if (catScore === winningNumber) {
        alert("You won! Meow");
        wins++
        $("#Wins").html(wins);
    } else if (catScore > winningNumber) {
        alert("Hissss, you lost");
        losses++
        $("#Losses").html(losses);
        gameReset(); 
    }

})



});


