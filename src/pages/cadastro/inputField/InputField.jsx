import styles from "../cadastro.module.css";

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <div className={styles.inputBox}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className={styles.inputUser}
        value={value}
        onChange={onChange}
        required
      />
      <br /><br />
    </div>
  );
};

export default InputField;
