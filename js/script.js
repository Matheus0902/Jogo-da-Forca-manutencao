
let palavras = ['limonada', 'passarinho', 'serenata', 'faculdade', 'campeonato', 'furadeira', 'restaurante', 'caminhonete', 'violino', 'engenheiro' , 'geografia', 'passaporte'];
var dicas = ['Bebida', 'Animal', 'Apresentação', 'Estudos', 'Disputa', 'Ferramenta', 'Comida', 'Transporte', 'Som' , 'Profissão', 'Disciplina', 'Documento']
let palavraAleatoria = sorteiaPalavra();
var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z'];
var separacao = palavras[palavraAleatoria].split(''); //Array com as letras da palavra

var canvas = document.getElementById('jogo');
var pincel = canvas.getContext('2d');
var corCorpo = 'black';
var corTraco = 'darkblue';

var inputs = selecionar('.inputs');
var novaPalavra = selecionar('.nova-palavra');
var novaDica = selecionar('.nova-dica');
var adicionarNovaPalavra = selecionar('.adicionar-nova-palavra');
var iniciarJogo = selecionar('.iniciar-jogo');
var enviarPalavra = selecionar('.enviar-palavra');
var game = selecionar('.canvas-game');
var canvas = selecionar('.canvas');
var recarregar = selecionar('.muda-palavra');
var botao = selecionar('.botao');
var rede = selecionar('.rede');
var funciona = true;
var teclado = selecionar('.teclado');
var divEnviar = selecionar('.bnt-enviar');
var divInicio = selecionar('.bnt-inicio');

inputs.addEventListener('keypress', function(e){

    if(!verificaChar(e)) {
        e.preventDefault();
    }
})

function verificaChar(e) {

    const char = String.fromCharCode(e.keyCode);
    
    const padrão = '[a-z]';

    if(char.match(padrão)){
        console.log(char);
        return true; 
    }
}

function sorteiaPalavra(){
    return Math.round(Math.random()*(palavras.length-1))
}

iniciarJogo.addEventListener('click', function iniciarjogo(){
    
    desenhaJogo();
    desenhaTraco(20, 60, palavraAleatoria);
    telaDoJogo();

    document.addEventListener('keydown', function verificaLetraTeclada(event){
 
        for(var i = 0; i < 26; i++){
            
            if(event.key == letras[i]){
            verifica(event.key);
            letras[i] = ""; 
            }
        }
                        
    })
})


enviarPalavra.addEventListener('click' , function(){
    palavras.push(novaPalavra.value);
    dicas.push(novaDica.value);
    console.log(palavras);
    console.log(dicas);
    novaDica.value = "";
    novaPalavra.value = ""; 
    inicio();
})  

adicionarNovaPalavra.onclick = function(){
    telaNovaPalavra();
}

function reinicia(){
    pincel = canvas.getContext('2d');
    pincel.clearRect(0, 0, 800, 600)
    inicio();
}

function somDaDerrota(){
    const newLocal = 'audios/derrota.wav';
    let sound1 = new Audio(newLocal);
    sound1.play();
}

function somDaVitoria(){
    let sound2 = new Audio('audios/vitoria.wav');
    sound2.play();
}

function selecionar(identificador){
    return document.querySelector(identificador);   
}



/* var letra = document.querySelectorAll(".letras");

letra.forEach(function(tecla){
    tecla.addEventListener("click", function(){
        var teclaAtual = tecla.value
        console.log(teclaAtual);

        var i = 0;
        if(teclaAtual == letras[i]){
        
            verifica(letras[i]);
            letras[i] = ""; 
            i++;
        }  
    })
    })
    
    
       for(var i = 1; i <= 26; i++){
            if(te)
            tecla[i].addEventListener('click', function(e){
            console.log(tecla[i].value);
            })
        }   */



