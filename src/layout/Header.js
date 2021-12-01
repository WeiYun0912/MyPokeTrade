import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import MobileList from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
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
          <Menu>
            <MobileList />
            <DesktopNav />
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
