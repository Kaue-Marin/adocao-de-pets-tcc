import imgCardPet from "../../../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg";
import styles from "./WhatWeDo.module.css";

const aboutParagraphs = [
  "Como um sistema dedicado à adoção de animais de estimação, oferecemos uma plataforma intuitiva e abrangente para conectar animais em busca de lares amorosos a pessoas ansiosas por adotar um novo companheiro peludo. Com uma variedade de perfis de pets, facilitamos o processo de encontrar o animal perfeito para cada lar.",
  "Nossa missão é promover o bem-estar animal, incentivando a adoção responsável e o cuidado compassivo com os animais. Trabalhamos em estreita colaboração com abrigos e resgates locais para fornecer uma plataforma onde os pets possam ser apresentados de forma cativante, destacando suas personalidades únicas e necessidades individuais.",
  "Ao conectar adotantes potenciais a pets necessitados, estamos ajudando a reduzir o número de animais abandonados e a encontrar lares permanentes para aqueles que precisam. Cada adoção feita através de nossa plataforma é uma história de amor que começa, promovendo a felicidade tanto para o pet quanto para sua nova família.",
  "Nossa equipe é composta por amantes de animais apaixonados, comprometidos em facilitar o processo de adoção e garantir que cada animal seja colocado em um ambiente seguro e amoroso. Estamos aqui para tornar a jornada de adoção uma experiência gratificante e memorável para todos os envolvidos.",
];

export const WhatWeDo = () => {
  return (
    <div className={styles.oquefazemos}>
      <div className={styles.aboutTitle}>O que fazemos</div>
      <div className={styles.aboutBox}>
        <div className={styles.petCard}>
          <img src={imgCardPet} alt="Cachorro" />
        </div>
        <div className={styles.aboutText}>
          <p>
            Nossa missão é conectar animais de estimação em busca de um lar com
            pessoas que desejam adotar e cuidar deles, fornecendo informações
            sobre os animais de estimação disponíveis e permitindo que as
            possíveis adotantes conheçam melhor os animais de estimação antes de
            decidir adotá-los.
          </p>
        </div>
      </div>

      {aboutParagraphs.map((text, index) => (
        <p className={styles.aboutText2} key={index}>
          {text}
        </p>
      ))}
    </div>
  );
};
