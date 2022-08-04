import "./DropdownMenu.css";
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as User } from "../../icons/user.svg";
import { ReactComponent as HTML } from "../../icons/html5.svg";
import { ReactComponent as CSS } from "../../icons/css.svg";
import { ReactComponent as JS } from "../../icons/js.svg";
import { ReactComponent as REACT } from "../../icons/react.svg";
import { ReactComponent as NODE } from "../../icons/node.svg";
import { CSSTransition } from "react-transition-group";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const DropdownItem = (props) => {
    const menuActive = () => {
      props.goToMenu && setActiveMenu(props.goToMenu);
    };
    return (
      <a href="#" className="menu-item " onClick={menuActive}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<User />}>Profile</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} goToMenu="skills">
            Skills
          </DropdownItem>
          <DropdownItem leftIcon="🌎" goToMenu="countries">
            Countries
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "skills"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Skills</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<HTML />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<CSS />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<JS />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<REACT />}>React</DropdownItem>
          <DropdownItem leftIcon={<NODE />}>Node JS</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "countries"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Countries</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🇲🇽">México</DropdownItem>
          <DropdownItem leftIcon="🇨🇦">Canada</DropdownItem>
          <DropdownItem leftIcon="🇧🇷">Brasil</DropdownItem>
          <DropdownItem leftIcon="🇺🇸">USA</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
