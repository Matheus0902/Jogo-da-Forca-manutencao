let gameWord = ['lojaz' , 'carroy' , 'escola'];
let dica = ['estabelecimento' , 'transporte' , 'estudos'];

function newGame(drawNumber){

    const boxLetter = document.querySelector('#box-letter');
    
    for(var i = 0; i < gameWord[drawNumber].length; i++){
    
    const newLetter = document.createElement('p');
    const newTextLetter = document.createTextNode(gameWord[drawNumber][i]);

    newLetter.classList.add('hidden-letter')
   newLetter.appendChild(newTextLetter) /**/
    boxLetter.appendChild(newLetter)
    }
}

function drawNumber(){
    return Math.floor(Math.random()*(gameWord.length)) 
}

let randomNumber = drawNumber();

newGame(randomNumber);/**/

const reload = document.querySelector('#reload');

reload.addEventListener('click' , function(){

    randomNumber = drawNumber();
    const boxLetter = document.querySelector('#box-letter');
    const keys = document.querySelector('.letter');
    
    keys.disabled = false;
    boxLetter.innerHTML = '';
    newGame(randomNumber);
})

let errorCount = 0;

function teste(letter){

    let correct = false;
    const newWord = gameWord[randomNumber];
    const key = document.getElementById(letter);

    for(var i = 0; i <= newWord.length; i++){
        if(letter == newWord[i]){
            console.log(newWord[i] + letter)
            key.disabled = true;
            correct = true;
        }
    }

    if(correct == false){
        
        key.disabled = true;
        errorCount = errorCount + 1;
        
        if(errorCount == 6){

            document.querySelector('#box-letter').style.display = 'none';
            document.querySelector('#box-keyboard').style.display = 'none';
            
            document.querySelector('.play-game').id = 'game-over';
        } else{
            document.querySelector('.play-game').id = 'bg'+errorCount;
        }
          
    }

}
