

//Used to change the content of the class
document.querySelector('.message').textContent = "👌Correct Ansewer";
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 40;

//Setting the input value
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);



const random = Math.trunc(Math.random() * 20) + 1;
console.log(random)

const inputvalue = document.querySelector('.guess');
const btncheck = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');

function btn () {
   if(inputvalue.value == random){
    message.textContent = "👌Correct Ansewer";
    number.textContent = random;
    document.body.style.backgroundColor = "#60b347";
    score.textContent = 20;
   }
   else if(inputvalue.value > random){
    message.textContent = "📈Too High";
   }
   else if(inputvalue.value < random){
    message.textContent = "📉Too Low";
   }
   
}
function again () {
    
const random = Math.trunc(Math.random() * 20) + 1;
console.log(random)
    number.textContent = "?";
    inputvalue.value = "";
    message.textContent = "Start guessing...";
    
    document.body.style.backgroundColor = "#222";
}
console.log(random)

// let highscore = 0;
// const displayMessage = function (message) {
//     document.querySelector('.message').textContent = message;
// }
