import "../assets/Footer.css";

import icfacebook from "../assets/ic-facebook.svg";
import icinstagram from "../assets/ic-instagram.svg";
import ictwitter from "../assets/ic-twitter.svg";
import icyoutube from "../assets/ic-youtube.svg";

function Footer() {
  return (
    <footer>
      <div className="top_socials">
          <img href="#" src={icfacebook} alt="Facebook" />
          <img href="#" src={icinstagram} alt="Instagram" />
          <img href="#" src={ictwitter} alt="Twitter" />
          <img href="#" src={icyoutube} alt="Youtube" />
      </div>

      <div className="footer_links">
        <ul>
          <li><a href="#">Audio et sous-titres</a></li>
          <li><a href="#">Presse</a></li>
          <li><a href="#">Confidentialité</a></li>
          <li><a href="#">Nous contacter</a></li>
        </ul>
        <ul>
          <li><a href="#">Autodescription</a></li>
          <li><a href="#">Relations investisseurs</a></li>
          <li><a href="#">Informations légales</a></li>
        </ul>
      <ul>
        <li><a href="#">Centre d’aide</a></li>
        <li><a href="#">Recrutement</a></li>
        <li><a href="#">Préférences de cookies</a></li>
      </ul>
      <ul>
        <li><a href="">Cartes cadeaux</a></li>
        <li><a href="">Conditions d’utilisation</a></li>
        <li><a href="">Mentions légales</a></li>
      </ul>
    </div>
    <a href="" className="footer_button">Service code</a>
    <p>© 1997-2024 Netflix, Inc.</p>
  </footer>
);
}
export default Footer;
