function novoJogo(){
     
    function inicio(){
       document.querySelector('#iniciar').style.display = 'block';
       document.querySelector('#palavra').style.display = 'block';
       document.querySelector('.inputs').style.display = 'none';
       document.querySelector('#enviar').style.display = 'none';
       desenhaJogo();
       desenhaTraco();
       palavras.push(adicionar.value);
       dicas.push(dica.value);
       console.log(palavras);
       console.log(dicas);
   }
   
   enviar.onclick = inicio;

    adicionar = document.querySelector('#adicionar');
    dica = document.querySelector('#dica');
    novaPalavra = document.querySelector('#palavra');
    iniciar = document.querySelector('#iniciar');
    enviar = document.querySelector('#enviar');
    game = document.querySelector('#game');
   
   document.querySelector('#enviar').style.display = 'none';
   document.querySelector('.inputs').style.display = 'none';
   document.querySelector('.canvas').style.display = 'none';
   
   function sorteiaPalavra(){
       return Math.round(Math.random()*(palavras.length-1))
   }
   
    palavraAleatoria = sorteiaPalavra();
    tela = document.querySelector('canvas');
    pincel = tela.getContext('2d');
    corCorpo = 'black';
    corTraco = 'darkblue';
   
   pincel.lineWidth=3;
   
   function desenhaTraco(x1, x2){
   
       for(var i = 0; i < palavras[palavraAleatoria].length; i++){
       pincel.fillStyle = corTraco;
       pincel.beginPath();
       pincel.moveTo(x1, 465);
       pincel.lineTo(x2, 465);
       pincel.lineWidth = 4.5;
       pincel.stroke();
   
       x1+=60
       x2+=60
       } 
       
       if(palavras[palavraAleatoria]){
   
           pincel.font='20px arial';
           pincel.fillStyle = 'green';
           pincel.fillText('Dica: '+ dicas[palavraAleatoria], 200, 20);
   
       } 
   }
   
   letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z'];
   separacao = palavras[palavraAleatoria].split(''); //faz um array com as letras da palavra
   
   xLetraErrada = 0;
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
               xLetraCerta = xLetraCerta + 60;
               errou = false;
               contagem++;
               //alert(contagem);
                
           }  else{xLetraCerta = xLetraCerta + 60;}
       }     
   
       if(errou){
               pincel.font='40px arial';
               pincel.fillStyle = 'red';
               pincel.fillText(letra.toUpperCase(), xLetraErrada, 550); //letra errada
               xLetraErrada = xLetraErrada + 60;
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
           alert('Parabéns você venceu!!!')
           //pincel.font='20px arial';
           //pincel.fillStyle = 'black';
           //pincel.fillText('0 _ 0' , 350, 130); //letra certa
       }
   }
   
   teste = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
   
   document.addEventListener('keydown', function(event){
   
       if(event.key == 'a' && teste[0] == 0){
           verifica(letras[0]);
           teste[0]++;  
           
       } else if(event.key == 'b' && teste[1] == 1){
           verifica(letras[1]);        
           teste[1]++;
   
       } else if(event.key == 'c' && teste[2] == 2){
           verifica(letras[2]);        
           teste[2]++;
   
       } else if(event.key == 'd' && teste[3] == 3){
           verifica(letras[3]);        
           teste[3]++;
   
       } else if(event.key == 'e' && teste[4] == 4){
           verifica(letras[4]);        
           teste[4]++;
   
       } else if(event.key == 'f' && teste[5] == 5){
           verifica(letras[5]);        
           teste[5]++;
   
       } else if(event.key == 'g' && teste[6] == 6){
           verifica(letras[6]);        
           teste[6]++;
   
       } else if(event.key == 'h' && teste[7] == 7){
           verifica(letras[7]);        
           teste[7]++;
           
       } else if(event.key == 'i' && teste[8] == 8){
           verifica(letras[8]);        
           teste[8]++;
           
       } else if(event.key == 'j' && teste[9] == 9){
           verifica(letras[9]);        
           teste[9]++;
           
       } else if(event.key == 'k' && teste[10] == 10){
           verifica(letras[10]);        
           teste[10]++;
           
       } else if(event.key == 'l' && teste[11] == 11){
           verifica(letras[11]);        
           teste[11]++;
           
       } else if(event.key == 'm' && teste[12] == 12){
           verifica(letras[12]);        
           teste[12]++;
           
       } else if(event.key == 'n' && teste[13] == 13){
           verifica(letras[13]);        
           teste[13]++;
           
       } else if(event.key == 'o' && teste[14] == 14){
           verifica(letras[14]);        
           teste[14]++;
           
       } else if(event.key == 'p' && teste[15] == 15){
           verifica(letras[15]);        
           teste[15]++;
           
       } else if(event.key == 'q' && teste[16] == 16){
           verifica(letras[16]);        
           teste[16]++;
           
       } else if(event.key == 'r' && teste[17] == 17){
           verifica(letras[17]);        
           teste[17]++;
           
       } else if(event.key == 's' && teste[18] == 18){
           verifica(letras[18]);        
           teste[18]++;
           
       } else if(event.key == 't' && teste[19] == 19){
           verifica(letras[19]);        
           teste[19]++;
           
       } else if(event.key == 'u' && teste[20] == 20){
           verifica(letras[20]);        
           teste[20]++;
           
       } else if(event.key == 'v' && teste[21] == 21){
           verifica(letras[21]);        
           teste[21]++;
           
       } else if(event.key == 'x' && teste[22] == 22){
           verifica(letras[22]);        
           teste[22]++;
           
       } else if(event.key == 'w' && teste[23] == 23){
           verifica(letras[23]);        
           teste[23]++;
           
       } else if(event.key == 'y' && teste[24] == 24){
           verifica(letras[24]);        
           teste[24]++;
           
       } else if(event.key == 'z' && teste[25] == 25){
           verifica(letras[25]);        
           teste[25]++;
           
       }                              
   })
   
   novaPalavra.onclick = function(){
       document.querySelector('.inputs').style.display = 'block';
       document.querySelector('#enviar').style.display = 'block';
       document.querySelector('#palavra').style.display = 'none';
       document.querySelector('#iniciar').style.display = 'none';
   }
   
}
