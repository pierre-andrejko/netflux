import "../assets/Poland.css";
import PolandFilm from "../assets/images/bg-poland.png";

function Poland(){
    return(
        <div className="poland_film">
            <img className="poland_bg" src={PolandFilm} />
            <div className="poland_container">
                <div className="poland_title">
                    <h2 className="gold_age">L'âge d'or du cinéma</h2>
                    <h1 className="Polonais">Polonais</h1>
                </div>

                <div>
                    <h3 className="poland_content">Netflix Découverte - Juillet 2018</h3>
                    <p className="poland_desc">Andrzej Wajda, Roman Polanski, Agnieszka Holland, Pawel Pawlikowski...Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale.</p>
                </div>
                
            </div>
        </div>
    );
}

export default Poland