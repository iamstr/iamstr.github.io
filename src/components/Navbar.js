import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar({ open }) {
  // The width below which the mobile view should be rendered
  // ${open ? "show" : "d-none"}`
  const breakpoint = 620;
  const [click, setClick] = useState(open);
  const [width, setWidth] = useState(0);
  const closeMobileMenu = () => setClick(!click);

  return (
    <nav
      class={`nav${open ? " mobile bounceInRight" : ""} ${
        width > breakpoint ? " show" : ""
      }`}
    >
      <ul>
        <li onClick={() => closeMobileMenu}>
          <Link to="/">About Me</Link>
        </li>
        <li onClick={() => closeMobileMenu}>
          <Link to="/skills">Skills</Link>
        </li>
        <li onClick={() => closeMobileMenu}>
          <Link to="/projects">Projects</Link>
        </li>
        <li onClick={() => closeMobileMenu}>
          <Link to="/experience">Experience</Link>
        </li>
      </ul>
    </nav>
  );
}
