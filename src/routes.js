import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie";
import Container from "components/Container";
import FavoritoProvider from "context/Favoritos";
import Player from "pages/Player";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Container>
        <FavoritoProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/:id" element={<Player />} />
          </Routes>
        </FavoritoProvider>
      </Container>
      <Pie />
    </BrowserRouter>
  );
}

export default AppRoutes;
