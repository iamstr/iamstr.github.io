import React from "react";
import { Link } from "react-router-dom";
export default function Navbar({ open }) {
  const width = window.innerWidth;
  // The width below which the mobile view should be rendered
  const breakpoint = 620;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}
