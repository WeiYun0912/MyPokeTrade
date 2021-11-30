import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    fontSize: "18px",
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));
const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <Link
            to="/"
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            我的籌碼(寶可夢)
          </Link>
        </ListItem>

        <ListItem button>
          <Link
            to="/item"
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            我的籌碼(道具)
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            to="/pokemons"
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            我想換的色違
          </Link>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MyPokeTrade
          </Typography>
          <Menu>
            <div className="mobile">
              <IconButton
                edge="start"
                className={classes.menuButton}
                onClick={toggleDrawer(true)}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {list("right")}
              </Drawer>
            </div>
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
                  我想換的色違
                </Link>
              </Button>
            </div>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

const Menu = styled.div`
  .mobile {
    display: none;
  }
  @media (max-width: 40rem) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
`;
