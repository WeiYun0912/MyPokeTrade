import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BargainItem from "./components/BargainItem";
import BargainPokemon from "./components/BargainPokemon";
import Header from "./components/Header";
import Pokemons from "./components/Pokemons";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<BargainPokemon />} />
          <Route path="/pokemons" element={<Pokemons />} />

          <Route path="/item" element={<BargainItem />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
