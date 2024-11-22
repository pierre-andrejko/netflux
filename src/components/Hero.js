import "../assets/Hero.css";
import rooftop from "../assets/little_china_rooftop.png";
import logonarcos from "../assets/logo-narcos.svg";
import play from "../assets/ic-play.svg";
import plus from "../assets/plus.svg";

function Hero (){
    return(
        <div className="hero">
        <img className="narcos" src={rooftop} alt="A View of Little China's rooftop" />
        <img className="logonarcos" src={logonarcos} alt="logonarcos"/>
        <h3 className="netflixoriginal"> NETFLIX Original</h3>
        <h2 className="maintitle">Regardez la saison 3 maintenant</h2>
        <p className="maindesc">Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs d’Escobar passent à l’action et déclarent la guerre au gouvernement.</p>
        <img className="lecture" src={play} alt="Lecture"/>
        <img className="mylist" src={plus} alt="My List"/>
        </div>
    );
}

export default Hero;