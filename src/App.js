import "./index.css";
import React from "react";
import { ReactComponent as Menu } from "./icons/menu.svg";
import NavItem from "./components/menu/NavItem.jsx";
import DropdownMenu from "./components/menu/DropdownMenu";

const App = () => {
  return (
    <>
      <NavItem icon={<Menu />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </>
  );
};

export default App;
