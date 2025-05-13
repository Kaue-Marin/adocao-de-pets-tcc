import bannerImg from "../../../assets/about/banner-01.jpg";
import styles from "../ajude.module.css";
import { FaBone } from "react-icons/fa";

export const Banner = () => (
  <div className={styles.banner}>
    <img src={bannerImg} alt="Banner" className={styles.bannerImg} />
    <div className={styles.bannerText}>
      <h1 className={styles.bannerTitle}>Ajude-nos a continuar</h1>
      <p className={styles.bannerBrand}>Sua doação faz a diferença</p>
      <FaBone className={styles.boneIcon} />
    </div>
  </div>
);