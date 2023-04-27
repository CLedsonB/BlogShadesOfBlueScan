window.onload = (Event) => {

    var manga = json['mangas']

    preencherDiv(manga);
    
    const listaManga = document.querySelectorAll('div.manga');
    for (let i = 0; i < listaManga.length; i++) {
      const manga = listaManga[i];
      manga.addEventListener('click', (Event) => {
        window.location.href = `infoManga.html?manga=${manga.id}`;
      }); 
    }
};

function preencherDiv(manga) {
    var caixaConteudo = document.querySelector('.displayManga');
    
    for (var i = 0; i <= manga.length; i++) {
        const meuDiv = document.createElement('div');
        meuDiv.classList.toggle('manga');
        meuDiv.id = 'id' + i

        var meuImg = document.createElement('img');
        meuImg.classList.toggle('capa');
        var meuH3 = document.createElement('h3');
        meuH3.classList.toggle('titulo');
        var meuP = document.createElement('p');
        meuP.classList.toggle('capitulo');

        meuImg.src = manga[i].imagem;
        meuImg.alt = manga[i].titulo;
        meuImg.placeholder = manga[i].titulo;
        meuH3.textContent = manga[i].titulo;
        meuP.textContent = "Capitulo " + manga[i].capitulos;

        caixaConteudo.appendChild(meuDiv);
        meuDiv.appendChild(meuImg);
        meuDiv.appendChild(meuH3);
        meuDiv.appendChild(meuP);
    }
}

// resultado final

// <div class="manga">
// 		    <img class="capa" src="img/ds.jpeg" alt="Dr. Stone" placeholder="Dr. Stone">
//          <h3 class="titulo">Dr. Stone</h3>
//          <p class="capitulo" href="#">Capitulo 1</p>
// </div>
