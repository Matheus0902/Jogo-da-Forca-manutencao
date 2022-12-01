let gameWord = ['loja' , 'carro' , 'escola'];
let tips = ['estabelecimento' , 'transporte' , 'estudos'];

function newGame(drawNumber){

    const tip = document.querySelector('#tip');
    const newTextTip = document.createTextNode(tips[drawNumber])
    tip.appendChild(newTextTip);

    const boxLetter = document.querySelector('#box-letter');
    
    for(var i = 0; i < gameWord[drawNumber].length; i++){
    
    const newLetter = document.createElement('p');
    const newTextLetter = document.createTextNode(gameWord[drawNumber][i]);
    console.log(gameWord[drawNumber])
    
    newLetter.classList.add('hidden-letter')
    newLetter.classList.add(gameWord[drawNumber][i]);
    newLetter.appendChild(newTextLetter)
    boxLetter.appendChild(newLetter)
    }
}

function drawNumber(){
    return Math.floor(Math.random()*(gameWord.length)) 
}

let randomNumber = drawNumber();
newGame(randomNumber);

const reload = document.querySelector('#reload');

reload.addEventListener('click' , function(){

    const tip = document.querySelector('#tip');
    tip.textContent = '';

    randomNumber = drawNumber();
    const boxLetter = document.querySelector('#box-letter');
    const keys = document.querySelector('.letter');
    
    keys.disabled = false;
    boxLetter.innerHTML = '';
    newGame(randomNumber);
})

let errorCount = 0;

function checks(letter){

    let correct = false;
    const newWord = gameWord[randomNumber];
    const boxLetter = document.querySelector('#box-letter');

    for(var i = 0; i <= newWord.length; i++){
       
        if(letter == newWord[i]){

            boxLetter.children[i].classList.add('visible-letter');
            correct = true;
        }
    }

    if(correct == false){
        
        errorCount = errorCount + 1;
        
        if(errorCount == 6){
            document.querySelector('#box-tip').style.display = 'none';
            document.querySelector('#box-letter').style.display = 'none';
            document.querySelector('#box-keyboard').style.display = 'none';
            document.querySelector('.play-game').id = 'game-over';

        } else{

            document.querySelector('.play-game').id = 'bg'+errorCount;
        }   
    }

    document.querySelector('.'+letter).disabled = true;
}
