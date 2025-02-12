'use strict';
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');


const score0El=document.getElementById('score--0');
const score1El=document.getElementById('score--1');
const currentscore0El=document.getElementById('current--0');
const currentscore1El=document.getElementById('current--1');

const diceEl=document.querySelector('.dice');
const btnRollDice=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const btnNewGame=document.querySelector('.btn--new');
let scores,currentScore,activePlayer,playing;
const reset=function(){
 scores=[0,0];
score0El.textContent=0;
score1El.textContent=0;
currentscore0El.textContent=0;
currentscore1El.textContent=0;

 currentScore=0;
 activePlayer=0;
 playing=true;
 player0El.classList.add('player--active');
 player1El.classList.remove('player--active');
 player1El.classList.remove('player--winner');
 player0El.classList.remove('player--winner');


}
reset();
const switchPlayer=function(){
   document.getElementById(`current--${activePlayer}`).textContent=0;
currentScore=0;
activePlayer=activePlayer==0?1:0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');

}
diceEl.classList.add('hidden');
//functionality of rolling dice
btnRollDice.addEventListener('click',function(){
   //generate random dice number
   if(playing){
   const dice=Math.trunc(Math.random()*6)+1;
   diceEl.src=`dice-${dice}.png`;
   diceEl.classList.remove('hidden');
   //check the dice one or not
   if(dice!==1){
      currentScore+=dice;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;

   }
   else{
  
switchPlayer();
   }   
}
})
//functionality of hold button
btnHold.addEventListener('click',function(){
   if(playing){
   scores[activePlayer]+=currentScore;
   document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
  
   if( scores[activePlayer]>=100){
      playing=false;
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      diceEl.classList.add('hidden');
   

   } else{
      switchPlayer();
   }
   
   
}})
btnNewGame.addEventListener('click',reset) ;