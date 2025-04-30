let listaNumeros = [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampoChute() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampoChute();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e ' + numeroMaximo + ' e descubra o número secreto!');
}

function gerarNumeroAleatorio() {
    let NumeroEscolhido = Math.floor(Math.random() * numeroMaximo) + 1;
    let totalElementosLista = listaNumeros.length;

    if (totalElementosLista == numeroMaximo) {
        listaNumeros = [];
    }

    if (listaNumeros.includes(NumeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeros.push(NumeroEscolhido);
        return NumeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute < 1 || chute > numeroMaximo) {
        exibirTexto('p', 'Por favor, escolha um número entre 1 e ' + numeroMaximo + '.');
    } else if (chute == numeroSecreto) {
        exibirTexto('h1', 'PARABÉNS!!!');
        let mensagemTentativas = tentativas > 1 ? ' tentativas!' : ' tentativa!';
        let mensagemResposta = 'Você acertou o número secreto com ' + tentativas +  mensagemTentativas;
        exibirTexto('p', mensagemResposta);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute < numeroSecreto) {
        exibirTexto('h1', 'Ainda não!');
        exibirTexto('p', 'O número secreto é maior do que ' + chute + '! Tente novamente.');
    } else {
        exibirTexto('h1', 'Ainda não!');
        exibirTexto('p', 'O número secreto é menor do que ' + chute + '! Tente novamente.');
    }
    tentativas++;
    limparCampoChute();
}

exibirMensagemInicial();
