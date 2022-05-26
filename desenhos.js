//função desenhaforca
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var corCorpo = 'black';
var corTraco = 'darkblue';

pincel.font='70px arial';
pincel.lineWidth=3;

function desenhaJogo(){
    
pincel.beginPath();
pincel.fillStyle = corTraco;
pincel.fillRect(200, 50, 10, 310);
pincel.fillRect(200, 50, 180, 10);
pincel.fillRect(380, 50, 10, 49.5);
pincel.fillRect(100, 360, 294, 10);
}

function desenhaCabeça(){
    //função desenhaCabeça
    pincel.fillStyle = corCorpo;
    pincel.beginPath();
    pincel.arc(384, 132, 32, 0, 2*3.14);
    pincel.fill();

    pincel.fillStyle = 'white';
    pincel.beginPath();
    pincel.arc(384, 132, 28, 0, 2*3.14);
    pincel.fill();
}

function desenhaCorpo(){
    //função desenha corpo
    pincel.fillStyle = corCorpo;
    pincel.beginPath();
    pincel.fillRect(382, 164, 6, 120);
}

function desenhaBracoEsquerdo(){
    //função desenha braço esquerdo
    pincel.fillStyle = corCorpo;
    pincel.beginPath();
    pincel.moveTo(382, 164);
    pincel.lineTo(320, 215);
    pincel.lineWidth = 5;
    pincel.stroke();
}

function desenhaBracoDireito(){
    //desenha braço direito
    pincel.fillStyle = corCorpo;
    pincel.beginPath();
    pincel.moveTo(386, 162);
    pincel.lineTo(447, 215);
    pincel.lineWidth = 5;
    pincel.stroke();
}

function desenhaPernaEsquerda(){
    //função perna esquerda
    pincel.fillStyle = corCorpo;
    pincel.beginPath();
    pincel.moveTo(384, 283);
    pincel.lineTo(320, 350);
    pincel.lineWidth = 5;
    pincel.stroke();
}

function desenhaPernaDireita(){
    //desenha perna direita
    pincel.fillStyle = corCorpo;
    pincel.beginPath();
    pincel.moveTo(386, 283);
    pincel.lineTo(447, 350);
    pincel.lineWidth = 5;
    pincel.stroke();
}

function limpaTela(){
    pincel.fillStyle = 'white';
    pincel.fillRect(15, 0, 760, 600); 
    pincel.fillRect(0, 200, 800, 600); 
    
}

