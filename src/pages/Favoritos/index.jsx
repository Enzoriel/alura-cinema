import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import { useFavoritosContext } from "context/Favoritos";
import Card from "components/Card";

const Favoritos = () => {
  const { favorito } = useFavoritosContext();

  return (
    <>
      <Banner img="favoritos" color="#154580" />
      <Titulo>
        <h1>Mis favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => (
          <Card {...fav} key={fav.id} />
        ))}
      </section>
    </>
  );
};

export default Favoritos;
