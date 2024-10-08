import React from "react";
import "./PetServices.css";
import PetServicesItem from "./petServicesComponents/petServicesItem";
import MissionStatement from "./petServicesComponents/MissionStatement";

export const PetServices = () => {
  return (
    <section id="services" className="services">
      <div className="services-box">
        <PetServicesItem
          title="Adotando"
          description="Encontre seu companheiro perfeito e ajude a mudar uma vida. Clique para
        adotar agora!"
          service="adote"
          link="adote"
        />
        <PetServicesItem
          title="doando"
          description="Dê amor e um lar para um pet necessitado. Clique para começar a
            jornada de adoção e faça a diferença hoje!"
          service="doe"
          link="doe"
        />
        <PetServicesItem
          title="apadrinhe"
          description="Faça a diferença na vida de um animal necessitado. Clique para
            apadrinhar e oferecer suporte contínuo aos pets em busca de um lar
            amoroso."
          service="apadrinhe"
          link="ajude"
        />
      </div>
      <div className="sobre-nos">
        <MissionStatement
          title="Assuntos Pertinentes"
          description=" Estamos comprometidos em promover a conscieantização sobre adoção
            responsável, saúde e bem-estar animal. Acreditamos que cada animal
            merece uma vida feliz e saudável."
          subDescription="Junte-se a nós nessa missão de tornar o mundo um lugar melhor para
            os animais, um lar de cada vez."
        />
        <MissionStatement
          title="Sobre Nós"
          description="Somos uma equipe apaixonada por animais, dedicada a fazer a
            diferença na vida de cada animal que encontramos."
          subDescription="Desde a nossa fundação, já ajudamos a encontrar lares para centenas
            de animais e continuamos comprometidos em fazer a diferença na vida
            de tantos outros quanto possível."
        />
        <MissionStatement
          title="Assuntos Pertinente"
          description="Estamos dedicados a promover a conscientização sobre adoção
            responsável, saúde e bem-estar animal."
          subDescription="Junte-se a nós nessa missão de tornar o mundo um lugar melhor para
            os animais, um lar de cada vez."
        />
      </div>
    </section>
  );
};
