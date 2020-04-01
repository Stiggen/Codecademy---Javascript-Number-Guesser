let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=()=>{
 return Math.floor(Math.random()*10);
}
const getAbsoluteDistance=(a,b)=> Math.abs(a-b);
const compareGuesses = (human, computer, targetNumber) => {if(human < 0 || human > 9){window.alert("Nice try! Pick a number between 0 and 9!");}
  else if((getAbsoluteDistance(human,targetNumber)) <= (getAbsoluteDistance(computer,targetNumber))) 
{return true;}
  else {return false;}
};

const updateScore = winner => {
  if(winner ==='human'){
           humanScore++;
             }
  else if (winner ==='computer'){
          computerScore++;
                }
}
const advanceRound=()=>{
  currentRoundNumber++;}