import React from "react";
import { useContext } from "react";
import FavoritesContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoritesContext);

  const logoIMG =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={logoIMG} className="navbar-img" />
      </div>
      <div>{favoritePokemons.length} ❤</div>
    </nav>
  );
};

export default Navbar;
