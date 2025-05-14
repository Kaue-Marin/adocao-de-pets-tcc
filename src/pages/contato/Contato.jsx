import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { ContactItem } from "./contactItem/contactItem";
import { ContactForm } from "./contactForm/ContactForm";
import { BannerContato } from "./bannerContact/BannerContato";
import styles from './Contato.module.css';

export const Contato = () => (
  <section className={styles.contatoSection}>
    <BannerContato />
    <div className={styles.contactBox}>
      <div className={styles.contactInformations}>
        <ContactItem icon={FaPhone} title="Nosso Número" value="+55 (11) 95863-8232" />
        <ContactItem icon={FaEnvelope} title="Email" value="contato@petadocao.com" />
        <ContactItem icon={FaMapMarkerAlt} title="Localização" value="São Paulo, SP" />
      </div>
      <ContactForm />
    </div>
  </section>
);
