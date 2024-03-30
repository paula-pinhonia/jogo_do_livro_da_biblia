//declaração das variáveis
let listaDeLivrosDaBiblia = ['Gênesis', 'Êxodo', 'Levítico', 'Números', 'Deuteronômio', 'Josué', 'Juízes', 'Rute', '1 Samuel', '2 Samuel', '1 Reis', '2 Reis', '1 Crônicas', '2 Crônicas', 'Esdras', 'Neemias', 'Ester', 'Jó', 'Salmos', 'Provérbios', 'Eclesiastes', 'Cantares de Salomão', 'Isaías', 'Jeremias', 'Lamentações', 'Ezequiel', 'Daniel', 'Oséias', 'Joel', 'Amós', 'Obadias', 'Jonas', 'Miquéias', 'Naum', 'Habacuque', 'Sofonias', 'Ageu', 'Zacarias', 'Malaquias', 'Mateus', 'Marcos', 'Lucas', 'João', 'Atos dos Apóstolos', 'Romanos', '1 Coríntios', '2 Coríntios', 'Gálatas', 'Efésios', 'Filipenses', 'Colossenses', '1 Tessalonicenses', '2 Tessalonicenses', '1 Timóteo', '2 Timóteo', 'Tito', 'Filêmon', 'Hebreus', 'Tiago', '1 Pedro', '2 Pedro', '1 João', '2 João', '3 João', 'Judas', 'Apocalipse'];
    let palavraSorteada = listaDeLivrosDaBiblia[Math.floor(Math.random() * listaDeLivrosDaBiblia.length)];
let tentativas = 1;
let chutesDoUsuario = [];

function exibirTextoNaTela(tag, texto) {
    let campo  = document.querySelector(tag);
    campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate: 1.5});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do livro da Bíblia');
    exibirTextoNaTela('p', 'Escolha um entre os 66 livros da Bíblia');
}

exibirMensagemInicial();

function verificarChute() {
let chute = document.querySelector('input').value;
chutesDoUsuario.push(chute); //adiciona o chute do usuário ao array de chutes

if (chute ===  palavraSorteada) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o livro da Bíblia com ${tentativas} ${palavraTentativa}`;
exibirTextoNaTela('p', mensagemTentativas);
document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    let posicaoChute = listaDeLivrosDaBiblia.indexOf(chute);
    let posicaoPalavraSorteada = listaDeLivrosDaBiblia.indexOf(palavraSorteada);
    
    if (posicaoChute > posicaoPalavraSorteada) {
        exibirTextoNaTela('p', 'O livro da Bíblia vem antes de seu chute');
    } else {
        exibirTextoNaTela('p', 'O livro da Bíblia vem depois de seu chute');
    }
    tentativas++;
}
}

function gerarLivroAleatorio() {
    palavraSorteada = listaDeLivrosDaBiblia[Math.floor(Math.random() * listaDeLivrosDaBiblia.length)]
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

function reiniciarJogo() {
    gerarLivroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}