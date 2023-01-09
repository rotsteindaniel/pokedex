import { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("Erro: " + error);
    }
  };

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  return (
    <>
      <Navbar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} />
      <div className="App"></div>
    </>
  );
}

export default App;
