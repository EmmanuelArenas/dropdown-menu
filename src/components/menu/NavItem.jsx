import "./DropdownMenu.css";
import React, { useState } from "react";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  const openOnclick = () => {
    setOpen(!open);
  };

  return (
    <li className="nav-item">
      <a href="#" className="icon-button " onClick={openOnclick}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};

export default NavItem;
