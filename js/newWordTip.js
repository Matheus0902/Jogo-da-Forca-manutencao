const subimmit = document.querySelector('#button-submit');
const wordReceived = document.querySelector('#new-word');
const tipReceived = document.querySelector('#new-tip');

import {gameWord} from "./script";
import {tips} from "./script";

subimmit.addEventListener('click' , function(){

    gameWord.push(wordReceived.value);
    tips.push(tipReceived.value);

    wordReceived.value = '';
    tipReceived.value = '';
})
