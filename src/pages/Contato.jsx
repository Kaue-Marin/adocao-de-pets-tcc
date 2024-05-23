import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Importando ícones relacionados a contatos
import "../styles/contatos.css";
import bannerImg from "../assets/about/banner-01.jpg";

export const Contato = () => {
  return (
    <section className="contato-section">
      <div className="banner-contact" style={{ marginBottom: "5rem" }}>
        <img src={bannerImg} alt="Banner" className="banner-img-contact" />
        <div className="banner-text-contact">
          <h1 className="banner-title-contact">Entre em Contato Conosco</h1>
          <p className="banner-brand-contact">Estamos aqui para ajudar você</p>
          <FaEnvelope className="contact-icon" style={{marginTop: "1.4rem" , fontSize: "2rem"}}/> {/* Ícone de envelope */}
        </div>
      </div>

      <div className="contact-box">
        <div className="contact-informations">
          <div className="contact-informations-item">
            <div className="icon-informations">
              <FaPhone className="icon" />
              <h2>Nosso Número</h2>
            </div>
            <span>+55 (11) 95863-8232</span>
          </div>
          <div className="contact-informations-item">
            <div className="icon-informations">
              <FaEnvelope className="icon" />
              <h2>Email</h2>
            </div>
            <span>contato@petadocao.com</span>
          </div>
          <div className="contact-informations-item">
            <div className="icon-informations">
              <FaMapMarkerAlt className="icon" />
              <h2>Localização</h2>
            </div>
            <span>São Paulo, SP</span>
          </div>
        </div>
        <div className="contact-form">
          <form
            action="https://formsubmit.co/contato@petadocao.com"
            method="post"
          >
            <div className="boxInput">
              <input type="text" name="name" placeholder="Seu nome" required />
            </div>
            <div className="boxInput">
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                required
              />
            </div>
            <div className="boxInput">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Sua mensagem..."
                required
              ></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://meusite.com/obrigado"
            />
            <button type="submit" className="btn btn-submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}
