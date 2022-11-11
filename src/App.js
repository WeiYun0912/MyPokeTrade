import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./layout/Header";
import BarginItem from "./pages/BargainItem";
import BargainPokemon from "./pages/BargainPokemon";
import WantPokemonsShiny from "./pages/WantPokemonsShiny";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<BargainPokemon />} />
          <Route path="/pokemons" element={<WantPokemonsShiny />} />
          <Route path="/item" element={<BarginItem />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
