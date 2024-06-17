// Ajude.js
import React from "react";
import { FaBone } from "react-icons/fa"; // Importando o ícone de osso
import { Link } from "react-router-dom";
import "../styles/ajude.css";
import bannerImg from "../assets/about/banner-01.jpg";
import imgCardPet from "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg";

export const Ajude = () => {
  return (
    <div className="ajude-container">
      <div className="banner" style={{ marginBottom: "5rem" }}>
        <img src={bannerImg} alt="Banner" className="banner-img" />
        <div className="banner-text">
          <h1 className="banner-title">Ajude-nos a continuar</h1>
          <p className="banner-brand">Sua doação faz a diferença</p>{" "}
          {/* Texto fictício */}
          <FaBone className="bone-icon" /> {/* Usando o ícone de osso */}
        </div>
      </div>
      <div className="oquefazemos">
        <div className="about-title">Ajude-nos</div>
        <div className="about-box">
          <div className="pet-card">
            <img src={imgCardPet} alt="Cachorro" />
          </div>
          <div className="about-text">
            <p>
              A sua ajuda é essencial para promover a adoção responsável de
              animais de estimação. Conectamos esses animais com lares amorosos
              e responsáveis, garantindo que recebam o cuidado e o carinho que
              merecem.
            </p>
            {/* Movendo o card do cachorro para o lado direito */}
          </div>
        </div>
        <p className="about-text-2">
          Contribuímos para o bem-estar animal através de uma plataforma
          intuitiva e abrangente.
        </p>
        <p className="about-text-2">
          Trabalhamos em estreita colaboração com abrigos e resgates locais para
          fornecer uma plataforma cativante para pets.
        </p>

        <p className="about-text-2">
          Ajudamos a reduzir o número de animais abandonados, encontrando lares
          permanentes para eles.
        </p>

        <p className="about-text-2">
          Nossa equipe se dedica a tornar a jornada de adoção uma experiência
          gratificante e memorável.
        </p>
      </div>
      <div className="donations-section">
        <h2>Faça uma Doação</h2>
        <p>
          Sua generosidade é crucial para continuar nosso trabalho em prol dos
          animais. Todas as doações são bem-vindas e contribuirão diretamente
          para cuidar de animais desabrigados e promover a adoção responsável.
        </p>
        <p>Formas de Doar:</p>
        <div className="donation-methods">
          <h4>Transferência bancária:</h4>
          <p>
            Você pode fazer uma doação através de TED ou depósito em conta para
            o seguinte banco:
          </p>
          <ul>
            <li>Banco do Brasil</li>
            <li>Agência: 3118-6</li>
            <li>Conta-corrente: 42305-x</li>
            <li>Associação Amigo Não se Compra</li>
            <li>CNPJ: 28.551.625/0001-60</li>
          </ul>
          <p>
            Por favor, inclua "Doação" no campo de descrição ao fazer a
            transferência.
          </p>
          <h4>Outras formas:</h4>
          <p>
            Além de doações em dinheiro, também aceitamos doações de suprimentos
            para animais, como comida, brinquedos, cobertores, etc. Entre em
            contato conosco para mais informações sobre como doar itens físicos.
          </p>
        </div>
      </div>
    </div>
  );
};
