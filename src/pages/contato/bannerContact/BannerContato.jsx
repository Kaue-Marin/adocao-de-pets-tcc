import { FaEnvelope } from "react-icons/fa";
import bannerImg from "../../../assets/about/banner-01.jpg";
import styles from '../Contato.module.css';

export const BannerContato = () => (
  <div className={`${styles.bannerContact} ${styles.bannerMargin}`}>
    <img src={bannerImg} alt="Banner" className={styles.bannerImgContact} />
    <div className={styles.bannerTextContact}>
      <h1 className={styles.bannerTitleContact}>Entre em Contato Conosco</h1>
      <p className={styles.bannerBrandContact}>Estamos aqui para ajudar você</p>
      <FaEnvelope className={`${styles.contactIcon} ${styles.contactIconMargin}`} />
    </div>
  </div>
);
