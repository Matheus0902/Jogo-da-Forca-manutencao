    var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z'];
    var separacao = palavras[palavraAleatoria].split(''); //Array com as letras da palavra

    var xLetraErrada = 20;
    var contagemAcerto = 0;
    var contagemErro = 0;
    
    function verifica(letra){
        
        if(novaPalavra.value == "" && novaDica.value == ""){
            var xLetraCerta = 20;
            var errou = true;
            
            for(var i = 0; i < separacao.length; i++){
            
            if(letra == separacao[i]){
                    desenhaLetraCerta(letra, xLetraCerta);
                    xLetraCerta = xLetraCerta + 50;
                    errou = false;
                    contagemAcerto = contagemAcerto +1;
                }  else{xLetraCerta = xLetraCerta + 50;}
            }     

            if(errou){

                    desenhaLetraErrada(letra, xLetraErrada);
                    xLetraErrada = xLetraErrada + 50;
                    console.log(xLetraErrada);
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
                        desenhaDerrota();
                        somDaDerrota();
                    } 
            } 
            
            if(contagemAcerto == separacao.length){
                desenhaVitoria();
                somDaVitoria();
                setTimeout(function(){
                    novoJogo();
                },500)
            }
        }
    }
