import styles from "./Card.module.css";
import iconFavorito from "./favorito.png";
import iconNoFavorito from "./no-favorito.png";
import { useFavoritosContext } from "context/Favoritos";

function Card({ id, capa, titulo }) {
  const { favorito, agregarFavorito } = useFavoritosContext();
  const isFavorito = favorito.some((fav) => fav.id === id);
  const icon = isFavorito ? iconFavorito : iconNoFavorito;

  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img src={icon} alt="Icono favorito" onClick={() => agregarFavorito({ id, titulo, capa })} />
    </div>
  );
}

export default Card;
