function novoJogo(){
     
    enviar.onclick = inicio;
   
    sorteiaPalavra();

    palavraAleatoria = sorteiaPalavra();

    desenhaTraco();
   
    letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z'];
    separacao = palavras[palavraAleatoria].split(''); 
    
    xLetraErrada = 20;
    contagem = 0;
    contagemErro = 0;
    
    function verifica(letra){
        
        var xLetraCerta = 20;
        var errou = true;
                
        for(var i = 0; i < separacao.length; i++){
            
            if(letra == separacao[i]){
                
                pincel.font='40px arial';
                pincel.fillStyle = 'black';
                pincel.fillText(letra.toUpperCase(), xLetraCerta, 460); //letra certa
                xLetraCerta = xLetraCerta + 50;
                errou = false;
                contagem++;
                    
            }  else{xLetraCerta = xLetraCerta + 50;}
        }     
    
        if(errou){
                pincel.font='40px arial';
                pincel.fillStyle = 'red';
                pincel.fillText(letra.toUpperCase(), xLetraErrada, 550); //letra errada
                xLetraErrada = xLetraErrada + 50;
                contagemErro++;
                if(contagemErro == 1){
                    desenhaCabeça()
                
                } else if(contagemErro == 2){
                    desenhaCorpo()
    
                } else if(contagemErro == 3){
                    desenhaBracoEsquerdo()
    
                } else if(contagemErro == 4){
                    desenhaBracoDireito()
    
                } else if(contagemErro == 5){
                    desenhaPernaEsquerda()
    
                } else if(contagemErro == 6){
                    desenhaPernaDireita()
                    alert('GAME OVER!!!')
                } 
        } 
        
        if(contagem == separacao.length){
            alert('Parabéns você venceu!!!');
        }
    }
    
    teste = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    
    novaPalavra.onclick = function(){
        document.querySelector('.inputs').style.display = 'block';
        document.querySelector('#enviar').style.display = 'block';
        document.querySelector('#palavra').style.display = 'none';
        document.querySelector('#iniciar').style.display = 'none';
    }
    
}
