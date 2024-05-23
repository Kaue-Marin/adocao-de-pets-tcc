// Parceiros.js
import React from "react";
import { FaHandshake } from "react-icons/fa"; // Importando o ícone de aperto de mão
import { Link } from "react-router-dom";
import "../styles/parceiros.css";
import bannerImg from "../assets/about/banner-01.jpg";
import imgCardPartner from "../assets/parcerias/empresa.jpg"; // Imagem de card para parceiros

export const Parceiros = () => {
  return (
    <div className="parceiros-container">
      <div className="banner" style={{ marginBottom: "5rem" }}>
        <img src={bannerImg} alt="Banner" className="banner-img" />
        <div className="banner-text">
          <h1 className="banner-title">Nossos Parceiros</h1>
          <p className="banner-brand">Juntos fazemos a diferença</p>
          <FaHandshake className="handshake-icon" /> {/* Usando o ícone de aperto de mão */}
        </div>
      </div>
      <div className="oquefazemos">
        <div className="about-title">Parcerias que Transformam</div>
        <div className="about-box">
          <div className="partner-card">
            <img src={imgCardPartner} alt="Parceiro" />
          </div>
          <div className="about-text">
            <p>
              A colaboração com nossos parceiros é fundamental para o sucesso de nossas iniciativas. Juntos, trabalhamos para garantir que cada animal encontre um lar amoroso e responsável.
            </p>
          </div>
        </div>
        <p className="about-text-2">
          Nossos parceiros incluem uma variedade de organizações e empresas comprometidas com o bem-estar animal.
        </p>
        <p className="about-text-2">
          Desde abrigos locais até grandes corporações, cada parceiro desempenha um papel crucial em nossa missão.
        </p>
        <p className="about-text-2">
          Trabalhando em conjunto, conseguimos criar um impacto positivo e duradouro na vida de inúmeros animais.
        </p>
        <p className="about-text-2">
          Agradecemos profundamente a todos os nossos parceiros pelo apoio contínuo e dedicação.
        </p>
      </div>
      <div className="partner-list-section">
        <h2>Conheça Nossos Parceiros</h2>
        <p>
          Aqui estão alguns dos parceiros incríveis que nos ajudam a fazer a diferença:
        </p>
        <div className="partner-cards">
          <div className="card">
            <p>
              <strong>Parceiro 1:</strong> Descrição do parceiro 1 e seu papel na parceria.
            </p>
          </div>
          <div className="card">
            <p>
              <strong>Parceiro 2:</strong> Descrição do parceiro 2 e seu papel na parceria.
            </p>
          </div>
          <div className="card">
            <p>
              <strong>Parceiro 3:</strong> Descrição do parceiro 3 e seu papel na parceria.
            </p>
          </div>
          {/* Adicione mais cards de parceiros conforme necessário */}
        </div>
      </div>
      <Link to="/become-partner" className="partner-btn">
        Seja um Parceiro
      </Link> {/* Adicionando um botão para a página de se tornar parceiro */}
    </div>
  );
};
