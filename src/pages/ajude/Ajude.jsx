import styles from "./ajude.module.css";
import imgCardPet from "../../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg";
import { Banner } from "./banner/Banner";
import { InformativeText } from "./informativeText/InformativeText";
import { DonationMethod } from "./donationMethod/DonationMethod";

// Componente principal

export const Ajude = () => {
  return (
    <div className={styles.ajudeContainer}>
      <div style={{ marginBottom: "5rem" }}>
        <Banner />
      </div>

      <section className={styles.oquefazemos}>
        <h2 className={styles.aboutTitle}>Ajude-nos</h2>
        <div className={styles.aboutBox}>
          <div className={styles.petCard}>
            <img src={imgCardPet} alt="Cachorro" />
          </div>
          <div className={styles.aboutText}>
            <p>
              A sua ajuda é essencial para promover a adoção responsável de
              animais de estimação. Conectamos esses animais com lares amorosos
              e responsáveis, garantindo que recebam o cuidado e o carinho que
              merecem.
            </p>
          </div>
        </div>
        {[
          "Contribuímos para o bem-estar animal através de uma plataforma intuitiva e abrangente.",
          "Trabalhamos em estreita colaboração com abrigos e resgates locais para fornecer uma plataforma cativante para pets.",
          "Ajudamos a reduzir o número de animais abandonados, encontrando lares permanentes para eles.",
          "Nossa equipe se dedica a tornar a jornada de adoção uma experiência gratificante e memorável.",
        ].map((texto, index) => (
          <InformativeText key={index}>{texto}</InformativeText>
        ))}

      </section>

      <section className={styles.donationsSection}>
        <h2>Faça uma Doação</h2>
        <p>
          Sua generosidade é crucial para continuar nosso trabalho em prol dos
          animais. Todas as doações são bem-vindas e contribuirão diretamente
          para cuidar de animais desabrigados e promover a adoção responsável.
        </p>
        <p>Formas de Doar:</p>
        <DonationMethod />
      </section>
    </div>
  );
};
