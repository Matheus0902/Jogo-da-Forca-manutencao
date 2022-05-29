//desenhaforca
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var corCorpo = 'black';
var corTraco = 'darkblue';

pincel.font='70px serif';
pincel.lineWidth=3;
pincel.lineCap = "round";

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
    pincel.fillRect(0, 0, 800, 500); 
}

function  desenhaVitoria(){
    
    pincel.clearRect(0, 0, 800, 600)

    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.arc(400, 100, 32, 0, 2*3.14);
    pincel.fill();

    pincel.fillStyle = 'green';
    pincel.beginPath();
    pincel.arc(400, 100, 31.5, 0, 2*3.14);
    pincel.fill();
    
    pincel.fillStyle = 'black';
    pincel.fillRect(398, 130, 6, 120);
    
    pincel.moveTo(400, 150);
    pincel.lineTo(320, 100);
    pincel.lineWidth = 5;
    pincel.stroke();

    pincel.moveTo(402, 150);
    pincel.lineTo(480, 100);
    pincel.lineWidth = 5;
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(400, 248);
    pincel.lineTo(320, 298);
    pincel.lineWidth = 5;
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(402, 248);
    pincel.lineTo(482, 298);
    pincel.lineWidth = 5;
    pincel.stroke();

    pincel.font='40px Special Elite';
    pincel.fillStyle = 'green';
    pincel.fillText("PARABÉNS!!!", 295, 30); 
    pincel.fillText("SALVO DA FORCA!!!", 235, 430); 

    pincel = null;

}

function desenhaDerrota(){
    
    pincel.clearRect(0, 0, 800, 600)

    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.arc(265, 200, 32, 0, 2*3.14);
    pincel.fill();

    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.arc(265, 200, 31.5, 0, 2*3.14);
    pincel.fill();
    
    pincel.fillStyle = 'black';
    pincel.fillRect(299, 200, 150, 5);
    
    //perna direita
    pincel.moveTo(448, 203);
    pincel.lineTo(528, 153);
    pincel.lineWidth = 5;
    pincel.stroke();

    //braço direito
    pincel.beginPath();
    pincel.moveTo(380, 153);
    pincel.lineTo(300, 203);
    pincel.lineWidth = 5;
    pincel.stroke();

    //perna esquerda
    pincel.beginPath();
    pincel.moveTo(448, 203);
    pincel.lineTo(528, 253);
    pincel.lineWidth = 5;
    pincel.stroke();
    
    //braco esquerdo
    pincel.moveTo(380, 258);
    pincel.lineTo(300, 202);
    pincel.lineWidth = 5;
    pincel.stroke();

    pincel.font ='Special Elite';
    pincel.fillStyle = 'red';
    pincel.fillText("NÃO FOI DESTA VEZ!", 200, 50)
    pincel.fillText("GAME OVER!!!", 270, 430);

    pincel = null;
}

