import React, { useEffect } from "react";
import parceriasImg from "../../assets/parcerias/empresa.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Adicionado
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./projects.css";
export const Projects = () => {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");

    // Define a quantidade de pixels que o carrossel deve se mover
    const scrollAmount = 530;

    // Função para mover o carrossel para a esquerda
    function scrollLeft() {
      carousel.scrollLeft -= scrollAmount;
    }

    // Função para mover o carrossel para a direita
    function scrollRight() {
      carousel.scrollLeft += scrollAmount;
    }

    // Adiciona ouvintes de eventos aos botões
    leftButton.addEventListener("click", scrollLeft);
    rightButton.addEventListener("click", scrollRight);

    // Remove os ouvintes de eventos quando o componente for desmontado
    return () => {
      leftButton.removeEventListener("click", scrollLeft);
      rightButton.removeEventListener("click", scrollRight);
    };
  }, []); // Array vazio para garantir que o useEffect seja executado apenas uma vez

  return (
    <section id="projects" className="projects">
      <h1 className="title-section">parcerias</h1>
      <div className="wrapper">
        <FontAwesomeIcon icon={faAngleLeft} id="left" className="fa-icon" />
        <div className="carousel">
          <div className="projects-box">
            <h2 className="parceria-name">Patitas & Companhia</h2>
            <div className="projects-img">
              <img
                src={parceriasImg}
                alt="layout terra do café"
                className="layoutProject"
              />

              <img
                src={parceriasImg}
                alt="layout terra do café"
                className="layoutProject"
              />

              <img
                src={parceriasImg}
                alt="layout terra do café"
                className="layoutProject"
              />
            </div>
          </div>
          <div className="projects-box">
            <h2 className="parceria-name">Patitas & Companhia</h2>
            <div className="projects-img">
              <img
                src={parceriasImg}
                alt="layout terra do café"
                className="layoutProject"
              />

              <img
                src={parceriasImg}
                alt="layout terra do café"
                className="layoutProject"
              />

              <img
                src={parceriasImg}
                alt="layout terra do café"
                className="layoutProject"
              />
            </div>
          </div>
          <div className="projects-box">
            <h2 className="parceria-name">Patitas & Companhia</h2>
            <div className="projects-img">
              <img
                src={parceriasImg}
                alt="layout terra do café"
                className="layoutProject"
              />

              <img
                src={parceriasImg}
                alt="layout terra do café"
                className="layoutProject"
              />

              <img
                src={parceriasImg}
                alt="layout terra do café"
                className="layoutProject"
              />
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faAngleRight} id="right" className="fa-icon" />
      </div>
    </section>
  );
};
