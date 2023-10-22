/* 
Win/lose condition fixed, set timeout implemented

10/15
*/

guessWord = [''] ;
wordChecker = [''];
let life = 5;

function wordGenerator(){

const inputElement = document.querySelector(".Word-Choice");
const inputElement2 = document.querySelector(".hint");
let Word = inputElement.value;
Word = Word.toUpperCase();
const Hint =inputElement2.value;

for (let i = 0; i < Word.length; i++) {
const a = Word.slice(i, (i+1));
guessWord.push(a);
}
document.querySelector(".Print").innerHTML = Hint;
document.getElementById("letters").classList.replace("off", "letters");
document.getElementById("word").classList.replace("word", "off")
}
function wordDisplay(){

}

function play(){ //Starts Game
wordGenerator();
wordDisplay();

}


function reset(){
  guessWord =[''];
  wordChecker = [''];
  life = 5
}

function test(){
let testing = ""
/*
test1 =['today', false, 4];
test2 =['today', false, 5];


if(test1.toString() === test2.toString()){
testing = 'Correct';
}else {
testing = 'wrong';
}
*/
testing = guessWord;
document.querySelector(".Print").innerHTML = testing;


}
function guess(letter){
let c = 0; //counter to help right n wrong
 

for(i=0; i != -1;) {
i = guessWord.indexOf(letter, i+1); // +1 so it starts after the letter it finds

if(i === -1 && c ===0){
  life--
  alert(`wrong \n You have ${life} tries left`)
  
}else{
  console.log(guessWord[i])
  wordChecker[i] = guessWord[i]
  c++
}

if(wordChecker.toString() === guessWord.toString()){ //win condition
  document.querySelector(".Print").innerHTML = 'You win!';
  alert("You Win!")
  reset();
  location.reload(true);
  

}else if (life ===0){ //lose condition
  document.querySelector(".Print").innerHTML = 'You lose!';
  alert("You Lose!")
  reset();
  location.reload(true)
}
}
}
