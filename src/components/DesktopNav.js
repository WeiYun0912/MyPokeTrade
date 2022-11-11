import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const DesktopNav = () => {
  return (
    <div className="desktop">
      <Button color="inherit">
        <Link
          to="/"
          style={{
            color: "#FFF",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          我的籌碼(寶可夢)
        </Link>
      </Button>

      <Button color="inherit">
        <Link
          to="/item"
          style={{
            color: "#FFF",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          我的籌碼(道具)
        </Link>
      </Button>
      <Button color="inherit">
        <Link
          to="/pokemons"
          style={{
            color: "#FFF",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          我想要的色違
        </Link>
      </Button>
    </div>
  );
};

export default DesktopNav;
