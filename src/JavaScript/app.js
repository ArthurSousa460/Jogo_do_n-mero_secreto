let tentativas = 1
let listaNumerosSorteados = []
exibirMensageminicial()

function exibirTextoHtml(tag, texto){
    document.querySelector(tag).innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}


function gerarNumAleatorio(){
    let numeroSorteado = parseInt(Math.random() * 10 + 1);
    if(listaNumerosSorteados.length == 10){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroSorteado)){
        return gerarNumAleatorio();
    }else{
            listaNumerosSorteados.push(numeroSorteado);
            return numeroSorteado;
        }
    }


function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}


function verificarChute(){
    let chute = document.querySelector('.container__input').value;
        if(chute == numSecreto){
            let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
            let mensagemAcertou = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} `;
            exibirTextoHtml('h1', "Acertou");
            exibirTextoHtml('p', mensagemAcertou);
            document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numSecreto){
            exibirTextoHtml('p', 'O número secreto é menor');
        }else{
            exibirTextoHtml('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}



function reiniciarJogo(){
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
   

}

function exibirMensageminicial(){
    exibirTextoHtml('h1', 'Jogo do número secreto');
    exibirTextoHtml('p', 'Escolha um número entre 1 e 10');
}

let numSecreto = gerarNumAleatorio();

