import "../assets/Hero.css";

import play from "../assets/ic-play.svg";
import plus from "../assets/plus.svg";
import rooftop from "../assets/little_china_rooftop.png";
import netflixOriginal from "../assets/netflix_original.svg";
import nightCity from "../assets/night_city.png";



function Hero() {
    return(
            <div className="hero">
                <img className="rooftop" src={rooftop} alt="A View of Little China's rooftop" />
                <div className="hero_container">
                    <div className="hero_title">
                        <img className="hero_netflix_original" src={netflixOriginal}/>
                        <img className="nightcitylogo" src={nightCity} alt="Title with Cyberpunk fonts"/>
                    </div>

                    <div>
                        <h2 className="hero_content">Regardez la saison 3 maintenant</h2>
                        <p className="content_description">Suivez des gens extraordinaires dans des vies ordinaires du sombre futur.</p>
                    </div>
                    <div className="hero_ctas">
                        <a className="hero_cta">
                            <img src={play} alt="Play" />
                            Lecture
                        </a>
                        <a className="hero_cta">
                            <img src={plus} alt="Plus" />
                        My List
                        </a>
                    </div>
                </div>
            </div>
    );
}

export default Hero;