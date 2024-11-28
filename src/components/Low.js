import "../assets/Low.css";
import a from "../assets/images/1-01.png";
import b from "../assets/images/1-02.png";
import c from "../assets/images/1-03.png";
import d from "../assets/images/1-04.png";
import e from "../assets/images/1-05.png";
import f from "../assets/images/1-06.png";

import g from "../assets/images/2-01.png";
import h from "../assets/images/2-02.png";
import i from "../assets/images/2-03.png";
import j from "../assets/images/2-04.png";
import k from "../assets/images/2-05.png";
import l from "../assets/images/2-06.png";
import m from "../assets/images/2-07.png";

import polandbg from "../assets/images/bg-poland.png";
import goldage from "../assets/images/L-age-d-or-du-cinema-polonais.svg";
import polonais from "../assets/images/Polonais.svg";

import arrow from "../assets/images/arrow.svg";

import n from "../assets/images/3-01.png";
import o from "../assets/images/3-02.png";
import p from "../assets/images/3-03.png";
import q from "../assets/images/3-04.png";
import r from "../assets/images/3-05.png";
import s from "../assets/images/3-06.png";
import t from "../assets/images/3-07.png";

function Low(){
    return(
<div>
<section className="revoir">
  <h3>Revoir</h3>
  <div className="scrollable">
    <img src={a} alt="" />
    <img src={b} alt="" />
    <img src={c} alt="" />
    <img src={d} alt="" />
    <img src={e} alt="" />
    <img src={f} alt="" />
  </div>
</section>

<section className="tendances">
  <h3>Tendances</h3>
  <div className="scrollable">
    <img src={g} alt="" />
    <img src={h} alt="" />
    <img src={i} alt="" />
    <img src={j} alt="" />
    <img src={k} alt="" />
    <img src={l} alt="" />
    <img src={m} alt="" />
  </div>
</section>

<section className="details">
  <img src={polandbg} className="details__bg" />
  <div className="details__content">
    <img src={goldage} height="38" />
    <img className="details__title" src={polonais} height="61" />
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
    Programmes originaux Netflix <img src={arrow} class="arrow" />
  </h3>
  <div className="scrollable">
    <img src={n} alt="" />
    <img src={o} alt="" />
    <img src={p} alt="" />
    <img src={q} alt="" />
    <img src={r} alt="" />
    <img src={s} alt="" />
    <img src={t} alt="" />
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