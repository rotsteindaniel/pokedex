import React from "react";

const Navbar = () => {
  const logoIMG =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={logoIMG} className="navbar-img" />
      </div>
    </nav>
  );
};

export default Navbar;
