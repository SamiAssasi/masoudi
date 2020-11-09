import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Navigation from "./Navigation";
import Landingpage from "./Landingpage";


const useStyles = makeStyles((theme) => ({
header:{
  background: 'linear-gradient(to left, #6dd5ed, #2193b0)',
  color: 'white'
},
}));

const Header = () => {
  const classes = useStyles();
  const menuItems = [
    {
      menuTitle: "Sivu1",
      pageURL: "/",
    },
    {
      menuTitle: "Sivu2",
      pageURL: "/contact",
    },
    {
      menuTitle: "Sivu3",
      pageURL: "/about",
    },
  ];

  return (
    <div className={classes.header}>
      <Navigation menuItems={menuItems} />
      <Landingpage/>      
    </div>
  );
};

export default Header;
