var inputs = selecionar('.inputs');
var novaPalavra = selecionar('.nova-palavra');
var novaDica = selecionar('.nova-dica');
var adicionarNovaPalavra = selecionar('.adicionar-nova-palavra');
var iniciarJogo = selecionar('.iniciar-jogo');
var enviarPalavra = selecionar('.enviar-palavra');
var game = selecionar('.canvas-game');
var canvas = selecionar('.canvas');
var botao = selecionar('.botao');
var rede = selecionar('.rede');
var funciona = true;
var teclado = selecionar('.teclado');
var divEnviar = selecionar('.bnt-enviar');
var divInicio = selecionar('.bnt-inicio');

function telaNovaPalavra(){
    inputs.classList.remove("invisivel");
    divEnviar.classList.remove("invisivel");
    divInicio.classList.add("invisivel");
    rede.style.cssText = 'margin-top: 20.4%';
    novaPalavra.disable = true;
}

function telaDoJogo(){
    iniciar.classList.add("invisivel");
    canvas.classList.remove("invisivel");
    novaPalavra.classList.add("invisivel");
    inputs.classList.add("invisivel");
    enviar.classList.add("invisivel");
    botao.classList.add("invisivel");
    rede.style.cssText = 'margin-top: 30%';
}

function telaInicio(){
    reinicia
}
