import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from "data/db.json";

function Player() {
  const parametros = useParams();
  const video = videos.find((video) => video.id === Number(parametros.id));
  console.log(video);

  return (
    <>
      <Banner img="player" color="#58B9AE" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}></section>
    </>
  );
}

export default Player;
