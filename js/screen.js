const boxWordGame = document.querySelector('#box-button-new-wordGame');
const boxGame = document.querySelector('#box-game');
const boxLetter = document.querySelector('#box-letter');
const boxKeyboard = document.querySelector('#box-keyboard');
const boxTip = document.querySelector('#box-tip');

const buttonNewGame = document.querySelector('#button-new-game');
buttonNewGame.addEventListener('click' , function(){

    boxWordGame.style.display = 'none';
    boxGame.style.display = 'flex';
    boxLetter.style.display = 'flex';
    boxKeyboard.style.display = 'flex';
    boxTip.style.display = 'block';

})

const boxWordTip = document.querySelector('#box-new-wordTip');
const boxSubmit = document.querySelector('#box-button-submit')

const buttonNewWord = document.querySelector('#button-new-word');
buttonNewWord.addEventListener('click' , function(){

    boxWordGame.style.display = 'none';
    boxWordTip.style.display = 'flex';
    boxSubmit.style.display = 'flex';

})

const buttonSubmit = document.querySelector('#button-submit');
buttonSubmit.addEventListener('click' , function(){

    boxWordGame.style.display = 'flex';
    boxWordTip.style.display = 'none';
    boxSubmit.style.display = 'none';
})

const home = document.querySelector('#home');
home.addEventListener('click' , function(){

    boxWordGame.style.display = 'flex';
    boxGame.style.display = 'none';
    boxLetter.style.display = 'none';
    boxKeyboard.style.display = 'none';
    boxWordTip.style.display = 'none';
    boxSubmit.style.display = 'none';
    boxTip.style.display = 'none';

    document.querySelector('.play-game').id = 'play-game';
})

