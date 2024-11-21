import "../assets/Footer.css";
import icfacebook from "../assets/ic-facebook.svg";
import icinstagram from "../assets/ic-instagram.svg";
import ictwitter from "../assets/ic-twitter.svg";
import icyoutube from "../assets/ic-youtube.svg";

function Footer() {
  return (
  <footer>
    <div className="topsocials">
      <a className="icon_facebook">
          <img src={icfacebook} />
      </a>
      <a className="icon_instagram">
          <img src={icinstagram} />
      </a>
      <a className="icon_twitter">
          <img src={ictwitter} />
      </a>
      <a className="icon_youtube">
          <img src={icyoutube} />
      </a>
    </div>
    <div className="footer1">
      <ul>
        <li>Audio et sous-titres</li>
        <li>Presse</li>
        <li>Confidentialité</li>
        <li>Nous contacter</li>
      </ul>
    </div>
    <div className="footer2">
      <ul>
        <li>Autodescription</li>
        <li>Relations investisseurs</li>
        <li>Informations légales</li>
      </ul>
    </div>
    <div className="footer3">
      <ul>
        <li>Centre d'aide</li>
        <li>Recrutement</li>
        <li>Préférences de cookies</li>
      </ul>
    </div>
    <div className="footer4">
      <ul>
        <li>
        Cartes cadeaux
        </li>
        <li>
        Conditions d'utilisation
        </li>
        <li>
        Mentions légales
        </li>
      </ul>
    </div>
  </footer>
);
}
export default Footer;
