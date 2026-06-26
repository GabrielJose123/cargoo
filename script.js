function alternarMenu() {
  document.getElementById('menu').classList.toggle('aberto');
}

function abrirAba(qual) {
  const conteudoEmpresa      = document.getElementById('aba-empresa');
  const conteudoCaminhoneiro = document.getElementById('aba-caminhoneiro');
  const botaoEmpresa         = document.getElementById('botao-empresa');
  const botaoCaminhoneiro    = document.getElementById('botao-caminhoneiro');

  conteudoEmpresa.classList.remove('mostrar');
  conteudoCaminhoneiro.classList.remove('mostrar');
  botaoEmpresa.classList.remove('ativa');
  botaoCaminhoneiro.classList.remove('ativa');

  if (qual === 'empresa') {
    conteudoEmpresa.classList.add('mostrar');
    botaoEmpresa.classList.add('ativa');
  } else {
    conteudoCaminhoneiro.classList.add('mostrar');
    botaoCaminhoneiro.classList.add('ativa');
  }
}
