import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  menuButton: {
    // marginRight: theme.spacing(2),
    fontSize: "18px",
  },

  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

const MobileList = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };
  const list = (
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
        {list}
      </Drawer>
    </div>
  );
};

export default MobileList;
