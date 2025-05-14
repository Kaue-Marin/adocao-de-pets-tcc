import React from "react";
import styles from "../Contato.module.css";

export const ContactItem = ({ icon: Icon, title, value }) => (
  <div className={styles.contactInformationsItem}>
    <div className={styles.iconInformations}>
      <Icon className={styles.icon} />
      <h2>{title}</h2>
    </div>
    <span>{value}</span>
  </div>
);
