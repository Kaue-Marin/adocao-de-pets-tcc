import React, { useState } from "react";
import logo from "../../assets/dog.png";
import login from "../../assets/carteira-de-identidade.png";
import registro from "../../assets/register.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header id="header">
        <div className="logo">
          <img src={logo} alt="logo marca adoção de pets" />
        </div>

        <nav className={`navBar ${menuOpen ? "active" : ""}`}>
          <ul>
            <Link to={"/"} className="link">
              home
            </Link>
            <Link to={"/about"} className="link">
              O que fazemos
            </Link>
            <Link to={"/ajude"} className="link">
              ajude
            </Link>
            <Link to={"/parceiros"} className="link">
              parceiros
            </Link>
            <Link to={"/contato"} className="link">
              contato
            </Link>
          </ul>
        </nav>

        <div className="profile">
          <div className="cadastro profile-box-items">
            <Link to={"/cadastro"}>
              <img
                src={registro}
                alt="imagem de registro"
                className="profile-img"
              />
            </Link>
            <p>cadastro</p>
          </div>
          <div className="cadastro profile-box-items">
            <Link to={"login"}>
              <img
                src={login}
                alt="imagem de registro"
                className="profile-img"
              />
            </Link>
            <p>login</p>
          </div>
        </div>

        <div className="icons">
          {!menuOpen ? (
            <FontAwesomeIcon
              icon={faTimes}
              id="menuBar"
              className="icon"
              onClick={toggleMenu}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              id="menuClosed"
              className="icon"
              onClick={toggleMenu}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
