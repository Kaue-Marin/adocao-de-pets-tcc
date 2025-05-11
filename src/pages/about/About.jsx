import styles from "./styles/AboutStyle.module.css"
import { Banner } from "./banner/Banner";
import { WhatWeDo } from "./whatWeDo/WhatWeDo";


export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Banner />
      <WhatWeDo />
    </div>
  );
};
