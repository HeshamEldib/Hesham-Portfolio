import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Logo />
          <MenuIcon setShow={() => setShow(!show)} />
          <NavbarLinks show={show} />
        </nav>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="logo">
      <a href="#">Hesham Eldib</a>
    </div>
  );
}

interface MenuIconProps {
  setShow(): any;
}
function MenuIcon({ setShow }: MenuIconProps) {
  return (
    <button className="menu-but" onClick={() => setShow()}>
      <FontAwesomeIcon icon={faBarsStaggered} />
    </button>
  );
}

interface NavbarLinksProps {
  show: boolean;
}
function NavbarLinks({ show }: NavbarLinksProps) {
  return (
    <div className={"nav-links " + (show ? "show" : "")} id="navbarNav">
      <ul className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
