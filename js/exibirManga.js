window.onload = (Event) => {
    var caixaConteudo = document.querySelector('.displayManga');


    var manga = json['mangas']

    for(var i=0; i<= manga.length; i++) {
        var meuDiv = document.createElement('div');
        meuDiv.classList.toggle('manga');

        var meuA1 = document.createElement('a');
        meuA1.classList.toggle('linkManga');
        var meuA2 = document.createElement('a');
        meuA2.classList.toggle('linkManga');
        var meuA3 = document.createElement('a');
        meuA3.classList.toggle('linkCapitulo');

        var meuImg = document.createElement('img');
        meuImg.classList.toggle('capa');
        var meuH3 = document.createElement('h3');
        meuH3.classList.toggle('titulo');
        var meuP = document.createElement('p');
        meuP.classList.toggle('capitulo');
        
        meuA1.href = "#";
        meuA2.href = "#";
        meuA3.href = "#";
        meuImg.src = manga[i].imagem;
        meuImg.alt = manga[i].titulo;
        meuImg.placeholder = manga[i].titulo;
        meuH3.textContent = manga[i].titulo;
        meuP.textContent = "Capitulo "+ manga[i].capitulos;

        caixaConteudo.appendChild(meuDiv);
        meuDiv.appendChild(meuA1);
        meuA1.appendChild(meuImg);
        meuDiv.appendChild(meuA2);
        meuA2.appendChild(meuH3);
        meuDiv.appendChild(meuA3);
        meuA3.appendChild(meuP);
    }
};
// resultado final

// <div class="manga">
//      <a href="#" class="linkManga">
// 		    <img class="capa" src="img/ds.jpeg" alt="Dr. Stone" placeholder="Dr. Stone">
//      </a>
// 	     <a href="#" class="linkManga">
//          <h3 class="titulo">Dr. Stone</h3>
// 	     </a>
//      <a href="#" class="linkCapitulo">
//          <p class="capitulo" href="#">Capitulo 1</p>
//      </a>		  
// </div>