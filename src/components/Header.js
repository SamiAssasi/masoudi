import React from "react";
import Navigation from "./Navigation";


const Header = () => {


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
    <div>
      <Navigation menuItems={menuItems}/>
    </div>
 
  );
};

export default Header;
