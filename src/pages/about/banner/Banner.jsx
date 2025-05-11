import styles from "./Banner.module.css";
import bannerImg from "../../../assets/about/banner-01.jpg";
import { FaBone } from "react-icons/fa";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={bannerImg} alt="Banner" className={styles.bannerImg} />
      <div className={styles.bannerContent}>
        <div className={styles.bannerText}>
          <h1 className={styles.bannerTitle}>Adoção de Pets</h1>
          <p className={styles.bannerBrand}>Seu Pet, Nossa Paixão</p>
          <FaBone className={styles.boneIcon} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
