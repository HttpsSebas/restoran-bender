import React from "react";
import logo from '../files/Bender.png'

function Nav() {
  return (
    <>
      <nav className="nav">
        <img src={logo} />
        <a href="/">Inicio</a>
        <a href="/menu">Menu</a>
        <a href="/reservas">Reservas</a>
        <a href="/about">About</a>
      </nav>
    </>
  );
}

export default Nav;
