import { createContext } from "react";

const FavoritesContext = createContext({
  favoritePokemons: [],
  updateFavoritePokemons: (id) => null,
});

export const FavoriteProvider = FavoritesContext.Provider;

export default FavoritesContext;
