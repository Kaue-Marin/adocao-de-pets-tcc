import styles from "../cadastro.module.css";

const RadioButtonGroup = ({ label, name, options, value, onChange }) => {
  return (
    <div className={styles.radios}>
      <p className={styles.label}>{label}:</p>
      {options.map((option) => (
        <div key={option} className={styles.radioItem}>
          <input
            type="radio"
            id={option}
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            required
          />
          <label htmlFor={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;