// Navbar avec dropdown ouvrable/fermable. 

import "../assets/Navbar.css";
import logo from "../assets/logo.svg";
import dropdown from "../assets/dropdown.svg";
import notification from "../assets/notification.svg";
import search from "../assets/search.svg";
import avatar from "../assets/avatar.png";
import burger from "../assets/burger.svg";

import { useState } from "react";

function Navbar() {
  const [dropdownActif, setDropdownActif] = useState(false);

  return (
    <header>
      <div className="header__left">
        <img className="logo" src={logo} alt="Netflix" />
        <nav>
          <a className="">Découverte</a>
          <a className="">Séries TV</a>
          <a className="">Films</a>
          <a className="">Programmes originaux</a>
          <a className="">Ajouts récents</a>
          <a className="">Ma liste</a>
        </nav>
      </div>
      <a className="burger">
        <img className="burger__icon" src={burger} />
      </a>
      <div className="header__right">
        <a>
          <img src={search} />
        </a>
        <a>Jeunesse</a>
        <a>
          <img src={notification} />
        </a>

        <div className="dropdown__container">
          {/* Button */}
          <a
            className="avatar"
            href="#"
            // onClick={() => {
            //   if (dropdownActif == true) {
            //     setDropdownActif(false);
            //   } else {
            //     setDropdownActif(true);
            //   }
            // }}
            onClick={() => setDropdownActif(!dropdownActif)}
          >
            <img src={avatar} />
            <img className="avatar__dropdown" src={dropdown} />
          </a>

          {/* Menu */}

          <div style={{ position: "relative" }}>
            {dropdownActif == true && (
              <img className="dropdown__caret" src={dropdown} />
            )}
            <div
              className={
                dropdownActif == true
                  ? "dropdown__menu active"
                  : "dropdown__menu"
              }
            >
              <a href="#">Gérer les profils</a>
              <a href="#">Transférer un profil</a>
              <a href="#">Compte</a>
              <a href="#">Centre d'aide</a>
              <div>
                <a href="#">Se déconnecter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;