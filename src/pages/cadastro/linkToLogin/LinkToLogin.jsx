import { Link } from "react-router-dom";
import styles from "../cadastro.module.css"; // CSS Module correto

const LinkToLogin = () => {
  return (
    <div className={styles.loginLinks}>
      <p>
        Já tem conta? <Link to="/login">Faça login</Link>
      </p>
    </div>
  );
};

export default LinkToLogin;
