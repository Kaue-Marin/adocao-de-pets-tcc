import styles from "./Btn.module.css";

export const Btn = ({ numPetsVisiveis, setNumPetsVisiveis }) => {
  const mostrarMaisPets = () => {
    setNumPetsVisiveis((prevNumPets) => prevNumPets + 3);
  };

  const mostrarMenosPets = () => {
    setNumPetsVisiveis((prevNumPets) => Math.max(3, prevNumPets - 3));
  };

  return (
    <div className={styles.boxBtn}>
      <button onClick={mostrarMaisPets} className={styles.btnForm}>
        Ver Mais
      </button>
      {numPetsVisiveis > 3 && (
        <button onClick={mostrarMenosPets} className={styles.btnForm}>
          Ver Menos
        </button>
      )}
    </div>
  );
};
