window.onload = (Event) => {

    var manga = json['mangas']
    preencherDiv(manga);
    // nomearId(manga);

    const listaManga = document.querySelectorAll('.manga');
  };

function preencherDiv(manga) {
    var caixaConteudo = document.querySelector('.displayManga');
    
    for (var i = 0; i <= manga.length; i++) {
        const meuDiv = document.createElement('div');
        meuDiv.classList.toggle('manga');
        const titulo = manga[i].titulo
        meuDiv.id = titulo.replace(/ /g, '_');

        const meuA1 = document.createElement('a');
        const meuA2 = document.createElement('a');
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
        meuDiv.appendChild(meuA1);
        meuA1.appendChild(meuImg);
        meuDiv.appendChild(meuA2);
        meuA2.appendChild(meuH3);
        meuDiv.appendChild(meuP);

        var id = document.getElementsByClassName('manga')[i].id;
        meuA1.href = 'infoManga.html?manga=' + id;
        meuA2.href = 'infoManga.html?manga=' + id;
      }
}

// function nomearId(manga) {
//   for(var i = 0; i <= manga.length; i++) {
//     var id = document.getElementsByClassName('manga')[i].id;
//     meuA1.href = 'infoManga.html?manga=' + id;
//     meuA2.href = 'infoManga.html?manga=' + id;
//   }
// }
