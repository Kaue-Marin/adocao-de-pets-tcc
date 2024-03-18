import React from "react";
import { Link } from "react-router-dom";
import "./services.css";

export const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-box">
        <div className="service-item">
          <h2 className="name-function">Adotando</h2>
          <p className="description-function">
            Encontre seu companheiro perfeito e ajude a mudar uma vida. Clique
            para adotar agora!
          </p>

          <Link to={"/adote"}>
            <button className="btn">adote</button>
          </Link>
        </div>
        <div className="service-item">
          <h2 className="name-function">doando</h2>
          <p className="description-function">
            Dê amor e um lar para um pet necessitado. Clique para começar a
            jornada de adoção e faça a diferença hoje!
          </p>

          <Link to={"/doe"}>
            <button className="btn">doe</button>
          </Link>
        </div>
        <div className="service-item">
          <h2 className="name-function">apadrinhe</h2>
          <p className="description-function">
            Faça a diferença na vida de um animal necessitado. Clique para
            apadrinhar e oferecer suporte contínuo aos pets em busca de um lar
            amoroso.
          </p>

          <Link to={"/apadrinhe"}>
            <button className="btn">apadrinhe</button>
          </Link>
        </div>
      </div>
      <div className="sobre-nos">
        <div className="assunto-pertinente">
          <h2>Assuntos Pertinentes</h2>
          <p>
            Estamos comprometidos em promover a conscientização sobre adoção
            responsável, saúde e bem-estar animal. Acreditamos que cada animal
            merece uma vida feliz e saudável.
          </p>
          <p>
            Junte-se a nós nessa missão de tornar o mundo um lugar melhor para
            os animais, um lar de cada vez.
          </p>
        </div>

        <div className="sobre-nos-card">
          <h2>Sobre Nós</h2>
          <p>
            Somos uma equipe apaixonada por animais, dedicada a fazer a
            diferença na vida de cada animal que encontramos.
          </p>
          <p>
            Desde a nossa fundação, já ajudamos a encontrar lares para centenas
            de animais e continuamos comprometidos em fazer a diferença na vida
            de tantos outros quanto possível.
          </p>
        </div>

        <div className="assunto-pertinente">
          <h2>Assuntos Pertinentes</h2>
          <p>
            Estamos dedicados a promover a conscientização sobre adoção
            responsável, saúde e bem-estar animal.
          </p>
          <p>
            Junte-se a nós nessa missão de tornar o mundo um lugar melhor para
            os animais, um lar de cada vez.
          </p>
        </div>
      </div>
    </section>
  );
};