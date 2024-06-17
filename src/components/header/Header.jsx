import React, { useState, useEffect } from "react";
import logo from "../../assets/dog.png";
import login from "../../assets/carteira-de-identidade.png";
import registro from "../../assets/register.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [imageProfile, setImageProfile] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setMenuOpen(false); // Fechar o menu em telas grandes
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const storedGoogleData = localStorage.getItem("googleData");
    const storedCadastroData = localStorage.getItem("cadastroData");
    const storedData = storedGoogleData || storedCadastroData;

    if (storedData) {
      try {
        const decodedData = JSON.parse(storedData);
        setIsLoggedIn(true);
        setUserData(decodedData);
        if (decodedData.fotoPerfil) {
          setImageProfile(decodedData.fotoPerfil);
        } else {
          setImageProfile(registro);
        }
      } catch (error) {
        console.error("Erro ao processar dados do localStorage:", error);
      }
    } else {
      setImageProfile(registro);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("googleData");
    localStorage.removeItem("cadastroData");
    localStorage.setItem("isLoggedIn", false);
    navigate("/cadastro");
    window.location.reload();
  };

  return (
    <>
      <header id="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo marca adoção de pets" />
          </Link>
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

        {isLoggedIn ? (
          <div className="profile">
            <div
              className="profile-box-items-google"
              onClick={toggleProfileMenu}
            >
              <div className="profile-img-Logged-header">
                <img
                  src={imageProfile}
                  alt="Foto de Perfil"
                  style={{ width: "70px" }}
                />
                {showProfileMenu && (
                  <div className="mini-menu">
                    <Link to={"/profile"}>
                      <p>Meu perfil</p>
                    </Link>
                    <p onClick={handleLogout}>Sair</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
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
              <Link to={"/login"}>
                <img
                  src={login}
                  alt="imagem de registro"
                  className="profile-img"
                />
              </Link>
              <p>login</p>
            </div>
          </div>
        )}

        <div className="icons">
          <FontAwesomeIcon
            icon={menuOpen ? faBars : faTimes}
            id="menuToggle"
            className="icon"
            onClick={toggleMenu}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
