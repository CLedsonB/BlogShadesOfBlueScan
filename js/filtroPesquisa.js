const buscaInput = document.querySelector('.barraPesquisa');
const botaoPesquisa = document.querySelector('.botaoPesquisa');

const filtrarLista = (valorInput, lista) => lista.filter( item => criterio(item, valorInput))
const criterio = (item, valorInput) => item.autor.toLowerCase().includes(valorInput) || item.titulo.toLowerCase().includes(valorInput) || item.genero.includes(valorInput)

const esconderLista = (listaDeDados, valorInput) => {
  listaDeDados
  .forEach(lista => {
    lista.setAttribute('style', 'display:none');
  })
}

const mostrarLista = (listaDeDados, valorInput) => {
 const listaFiltrada = filtrarLista(valorInput, listaDeDados)
  preencherDiv(listaFiltrada)
}

 botaoPesquisa.addEventListener('click', event => {
   const valorInput = buscaInput.value.trim().toLowerCase();
   const listaDeDivs = Array.from(document.querySelectorAll('.manga'));
   const listaManga = json['mangas']

   esconderLista(listaDeDivs, valorInput);
   mostrarLista(listaManga, valorInput); 
  }
)
