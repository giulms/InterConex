import styles from "./Filtro.module.css";

function Botao({ texto }) {
  return <button className={styles.botao}>{texto}</button>;
}

export default Botao;
