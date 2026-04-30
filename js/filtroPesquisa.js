const buscaInput = document.querySelector('.barraPesquisa');
const botaoPesquisa = document.querySelector('.botaoPesquisa');

const esconderLista = (listaDeDivs, valorInput) => {
  listaDeDivs.forEach((div) => {
    const autor = (div.dataset.autor || "").toLowerCase();
    const titulo = (div.dataset.titulo || "").toLowerCase();

    if (autor.includes(valorInput) || titulo.includes(valorInput)) {
      div.setAttribute('style', 'display:inline-block');
    } else {
      div.setAttribute('style', 'display:none');
    }
  });
};

const preencherDiv = (manga) => {
  const caixaConteudo = document.querySelector('.displayManga');
  caixaConteudo.innerHTML = "";

  manga.forEach((mangaItem) => {
    const meuDiv = document.createElement('div');
    meuDiv.classList.add('manga');
    meuDiv.id = (mangaItem.titulo || "").replace(/ /g, '_');
    
    // - se autor for string -> usa direto
    // - se autor for array -> junta em texto
    // - se vier undefined -> vira ""
    const autorTexto = Array.isArray(mangaItem.autor)
      ? mangaItem.autor.join(", ")
      : (mangaItem.autor || "");

    meuDiv.dataset.autor = String(autorTexto);
    meuDiv.dataset.titulo = String(mangaItem.titulo || "");

    const meuA1 = document.createElement('a');
    meuA1.href = '#';
    meuA1.addEventListener('click', () => exibirDetalhesManga(mangaItem));

    const meuImg = document.createElement('img');
    meuImg.classList.add('capa');
    meuImg.src = mangaItem.imagem;
    meuImg.alt = mangaItem.titulo;

    const meuA2 = document.createElement('a');
    meuA2.href = '#';
    meuA2.addEventListener('click', () => exibirDetalhesManga(mangaItem));

    const meuH3 = document.createElement('h3');
    meuH3.classList.add('titulo');
    meuH3.textContent = mangaItem.titulo;

    const meuP = document.createElement('p');
    meuP.classList.add('capitulo');
    meuP.textContent = "Capitulo " + mangaItem.capitulos;

    caixaConteudo.appendChild(meuDiv);
    meuDiv.appendChild(meuA1);
    meuA1.appendChild(meuImg);
    meuDiv.appendChild(meuA2);
    meuA2.appendChild(meuH3);
    meuDiv.appendChild(meuP);
  });
};

window.onload = () => {
  const listaManga = json['mangas'];
  preencherDiv(listaManga);

  botaoPesquisa.addEventListener('click', event => {
    const valorInput = buscaInput.value.trim().toLowerCase();

    const listaDeDivs = Array.from(document.querySelectorAll('.manga'));
    esconderLista(listaDeDivs, valorInput);
  });
};
