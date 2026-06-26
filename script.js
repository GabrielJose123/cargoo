/* ===================================================================
   CARGOO - script.js  (as interações da página)
   São apenas 3 funções, bem simples, cada uma comentada.
==================================================================== */

/* FUNÇÃO 1 — Abrir/fechar o menu no celular.
   Adiciona ou remove a classe "aberto" do menu. */
function alternarMenu() {
  // pega o menu pelo id e liga/desliga a classe "aberto"
  document.getElementById('menu').classList.toggle('aberto');
}

/* FUNÇÃO 2 — Trocar de aba em "Como funciona".
   Recebe qual aba abrir: 'empresa' ou 'caminhoneiro'. */
function abrirAba(qual) {
  // pega os dois conteúdos e os dois botões
  var conteudoEmpresa      = document.getElementById('aba-empresa');
  var conteudoCaminhoneiro = document.getElementById('aba-caminhoneiro');
  var botaoEmpresa         = document.getElementById('botao-empresa');
  var botaoCaminhoneiro    = document.getElementById('botao-caminhoneiro');

  // primeiro escondemos tudo e tiramos o destaque dos botões
  conteudoEmpresa.classList.remove('mostrar');
  conteudoCaminhoneiro.classList.remove('mostrar');
  botaoEmpresa.classList.remove('ativa');
  botaoCaminhoneiro.classList.remove('ativa');

  // depois mostramos só a aba escolhida e destacamos o botão dela
  if (qual === 'empresa') {
    conteudoEmpresa.classList.add('mostrar');
    botaoEmpresa.classList.add('ativa');
  } else {
    conteudoCaminhoneiro.classList.add('mostrar');
    botaoCaminhoneiro.classList.add('ativa');
  }
}

/* FUNÇÃO 3 — Enviar o cadastro pelo WhatsApp.
   Lê os campos, monta uma mensagem e abre o WhatsApp já preenchido. */
function enviarWhatsApp() {
  // lê o que a pessoa digitou em cada campo
  var nome  = document.getElementById('nome').value;
  var tipo  = document.getElementById('tipo').value;
  var whats = document.getElementById('whats').value;

  // monta o texto da mensagem (o + junta os pedaços)
  var mensagem = 'Ola! Quero participar do CARGOO.'
               + ' Nome: ' + nome
               + ' | Sou: ' + tipo
               + ' | WhatsApp: ' + whats;

  // TROQUE pelo número real (formato: 55 + DDD + número, só dígitos)
  var numero = '5544900000000';

  // encodeURIComponent transforma a mensagem em formato de link seguro
  var link = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensagem);

  // abre o WhatsApp em uma nova aba
  window.open(link, '_blank');
}
