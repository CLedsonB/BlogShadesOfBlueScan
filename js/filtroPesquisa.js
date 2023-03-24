const buscaInput = document.querySelector('.barraPesquisa');
const botaoPesquisa = document.querySelector('.botaoPesquisa');

const filtrarLista = (listaDeDados, valorInput, booleanLista) => listaDeDados
  .filter(listaDeDados => {
   const listaFiltrada = listaDeDados.textContent.toLowerCase().includes(valorInput)
    return booleanLista ? listaFiltrada : !listaFiltrada
  })

const esconderLista = (listaDeDados, valorInput) => {
  filtrarLista(listaDeDados, valorInput, false)
  .forEach(lista => {
    lista.setAttribute('style', 'display:none');
  })
}

const mostrarLista = (listaDeDados, valorInput) => {
filtrarLista(listaDeDados, valorInput, true)
.forEach(lista => {
    lista.removeAttribute('style', 'display:none');
  }) 
}

 botaoPesquisa.addEventListener('click', event => {
   const valorInput = buscaInput.value.trim().toLowerCase();
   const listaDeDados = Array.from(document.querySelectorAll('.manga'));

   esconderLista(listaDeDados, valorInput);
   mostrarLista(listaDeDados, valorInput); 
  }
)