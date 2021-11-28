import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MyPokeTrade
          </Typography>
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
              我想換的色違
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
