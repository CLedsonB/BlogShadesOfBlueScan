// Função para exibir os mangás
function exibirMangas(mangas) {
  const caixaConteudo = document.querySelector('.displayManga');
  caixaConteudo.innerHTML = "";
  
  const meuh3 = document.createElement('h3');
  meuh3.classList.add('tituloAgrupamento');
  meuh3.textContent = 'Últimos Lançamentos';
  
  caixaConteudo.appendChild(meuh3);
  

  mangas.forEach((manga) => {
    const meuDiv = document.createElement('div');
    meuDiv.classList.add('manga');
    meuDiv.id = manga.titulo.replace(/ /g, '_');

    const meuA1 = document.createElement('a');
    meuA1.href = '#';
    meuA1.addEventListener('click', () => exibirDetalhesManga(manga));

    const meuImg = document.createElement('img');
    meuImg.classList.add('capa');
    meuImg.src = manga.imagem;
    meuImg.alt = manga.titulo;

    const meuA2 = document.createElement('a');
    meuA2.href = '#';
    meuA2.addEventListener('click', () => exibirDetalhesManga(manga));

    const meuH3 = document.createElement('h3');
    meuH3.classList.add('titulo');
    meuH3.textContent = manga.titulo;

    const meuP = document.createElement('p');
    meuP.classList.add('capitulo');
    meuP.textContent = "Capitulo " + manga.capitulos;

    caixaConteudo.appendChild(meuDiv);
    meuDiv.appendChild(meuA1);
    meuA1.appendChild(meuImg);
    meuDiv.appendChild(meuA2);
    meuA2.appendChild(meuH3);
    meuDiv.appendChild(meuP);
  });
}

// Função para exibir os detalhes do manga
function exibirDetalhesManga(manga) {
  const caixaConteudo = document.querySelector('.displayManga');
  caixaConteudo.innerHTML = "";

  const meuLink = document.createElement('a');
  meuLink.href = '#';
  meuLink.classList.add('seta-voltar')
  meuLink.textContent = '<-';
  meuLink.addEventListener('click', () => {
    const mangas = json['mangas'];
    exibirMangas(mangas);
  });
  caixaConteudo.appendChild(meuLink);

  const meuDiv1 = document.createElement('div');
  meuDiv1.classList.add('bordaConteudo');

  const meuDiv2 = document.createElement('div');
  meuDiv2.classList.add('conterImagem');

  const meuImg = document.createElement('img');
  meuImg.classList.add('capaManga');
  meuImg.src = manga.imagem;
  meuImg.alt = "Capa do " + manga.titulo;

  const meuP1 = document.createElement('p');
  meuP1.classList.add('infoManga');
  meuP1.textContent = "Titulo : ";
  const meuB1 = document.createElement('b');
  meuB1.textContent = manga.titulo;
  meuP1.appendChild(meuB1);

  const meuP2 = document.createElement('p');
  meuP2.classList.add('infoManga');
  meuP2.textContent = "Autor : ";
  const meuB2 = document.createElement('b');
  meuB2.textContent = manga.autor;
  meuP2.appendChild(meuB2);

  const meuP3 = document.createElement('p');
  meuP3.classList.add('infoManga');
  meuP3.textContent = "Gênero : ";
  const meuB3 = document.createElement('b');
  meuB3.textContent = manga.genero;
  meuP3.appendChild(meuB3);

  const meuP4 = document.createElement('p');
  meuP4.classList.add('infoManga');
  meuP4.textContent = "Capítulos : ";
  const meuB4 = document.createElement('b');
  meuB4.textContent = manga.capitulos;
  meuP4.appendChild(meuB4);

  const meuP5 = document.createElement('p');
  meuP5.classList.add('infoManga');
  meuP5.textContent = "Concluído : ";
  const meuB5 = document.createElement('b');
  meuB5.textContent = manga.concluido;
  meuP5.appendChild(meuB5);
  
  const meuP6 = document.createElement('p');
  meuP6.classList.add('infoManga');
  meuP6.textContent = "Sinopse : ";
  const meuB6 = document.createElement('b');
  meuB6.textContent = manga.sinopse;
  meuP6.appendChild(meuB6);
  
  
  caixaConteudo.appendChild(meuDiv1);
  meuDiv1.appendChild(meuDiv2);
  meuDiv2.appendChild(meuImg);
  meuDiv1.appendChild(meuP1);
  meuDiv1.appendChild(meuP2);
  meuDiv1.appendChild(meuP3);
  meuDiv1.appendChild(meuP4);
  meuDiv1.appendChild(meuP5);
  meuDiv1.appendChild(meuP6);
}

window.onload = () => {
  const mangas = json['mangas'];
  exibirMangas(mangas);
};