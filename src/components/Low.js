import "../assets/Low.css";

function Low(){
    return(
<div>
<section className="revoir">
  <h3>Revoir</h3>
  <div className="scrollable">
    <img src="1-01.png" alt="" />
    <img src="1-02.png" alt="" />
    <img src="1-03.png" alt="" />
    <img src="1-04.png" alt="" />
    <img src="1-05.png" alt="" />
    <img src="1-06.png" alt="" />
    <img src="1-06.png" alt="" />
  </div>
</section>

<section className="tendances">
  <h3>Tendances</h3>
  <div className="scrollable">
    <img src="2-01.png" alt="" />
    <img src="2-02.png" alt="" />
    <img src="2-03.png" alt="" />
    <img src="2-04.png" alt="" />
    <img src="2-05.png" alt="" />
    <img src="2-06.png" alt="" />
    <img src="2-06.png" alt="" />
    <img src="2-07.png" alt="" />
  </div>
</section>

<section className="details">
  <img src="bg-poland.png" className="details__bg" />
  <div className="details__content">
    <img src="l-age-d-or-du-cinema-polonais.svg" height="38" />
    <img className="details__title" src="polonais.svg" height="61" />
    <h3>Netflix Découverte - Juillet 2018</h3>
    <p className="details__description">
      Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski…
      Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène
      internationale.
    </p>
  </div>
</section>

<section className="films">
  <div className="scrollable">
    <img src="bg-coldwar.png" alt="" />
    <img src="bg-ida.png" alt="" />
    <img src="bg-kanal.png" alt="" />
    <img src="bg-polanski.png" alt="" />
  </div>
</section>

<section className="titres">
  <div className="scrollable">
    <a>L’âge d’or du cinéma polonais (juillet 2018)</a>
    <a>La nouvelle vague française (juin 2018)</a>
    <a>Direction Cannes (mai 2018)</a>
    <a>Bollywood Classiques (mai 2018)</a>
    <a>L’âge d’or du cinéma polonais (juillet 2018)</a>
    <a>La nouvelle vague française (juin 2018)</a>
    <a>Direction Cannes (mai 2018)</a>
    <a>Bollywood Classiques (mai 2018)</a>
  </div>
</section>

<section className="originaux">
  <h3>
    Programmes originaux Netflix <img src="arrow.svg" class="arrow" />
  </h3>
  <div className="scrollable">
    <img src="3-01.png" alt="" />
    <img src="3-02.png" alt="" />
    <img src="3-04.png" alt="" />
    <img src="3-05.png" alt="" />
    <img src="3-06.png" alt="" />
    <img src="3-07.png" alt="" />
    <img src="3-03.png" alt="" />
  </div>
</section>

<section className="categories">
  <h3>Catégories</h3>
  <div className="scrollable">
    <div className="category">Comédie <img src="caret-down.svg" /></div>
    <div className="category">Action <img src="caret-down.svg" /></div>
    <div className="category">Drame <img src="caret-down.svg" /></div>
    <div className="category">Sci-Fi <img src="caret-down.svg" /></div>
    <div className="category">Romance <img src="caret-down.svg" /></div>
    <div className="category">Thriller <img src="caret-down.svg" /></div>
    <div className="category">Émissions <img src="caret-down.svg" /></div>
    <div className="category">Horreur <img src="caret-down.svg" /></div>
    <div className="category">Enfants <img src="caret-down.svg" /></div>
    <div className="category">Documentaire <img src="caret-down.svg" /></div>
  </div>
</section>
</div>
    );
}

export default Low;