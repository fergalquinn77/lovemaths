//wait for the DOM to finish before loading the game
//get the button elements and add listeners for them

document.addEventListener("DOMContentLoaded", function(){
    let buttons=document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type")==="submit"){
                alert("You clicked submit");
            }
            else
            {
                let gameType=this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }

        })
    }
})

/**
*The main game "loop" called when the script is first loaded
*and after the users answer has been processed 
*/
function runGame(){

//Generate two random numbers between 1 & 25
    let num1=Math.floor(Math.random()*25)+1;
    let num2=Math.floor(Math.random()*25)+1;

}

runGame();

function checkAnswer(){

}

function caculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}