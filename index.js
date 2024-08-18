
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select th eleft dice image element
const leftDiceImage = document.getElementById("leftDice");

const rightDiceImage = document.getElementById("rightDice");

// Change the source of the left dice image to a random dice image
leftDiceImage.src = "images/dice" + randomNumber1 + ".png";

rightDiceImage.src = "images/dice" + randomNumber2 + ".png";

const heading = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    
    heading.textContent = "Player 1 wins!";


}else if(randomNumber1 < randomNumber2){
    
    heading.textContent = "Player 2 Wins !";

}else{
    
    heading.textContent = "It 's a Draw!";
}


