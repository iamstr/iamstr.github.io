import React, { useState } from "react";
import Menu from "../assets/img/hamburger menu.svg";
import Navbar from "../components/Navbar";
export default function Contact() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <img
        src={Menu}
        alt=""
        class="hamburger project-menu"
        onClick={() => setOpen(!open)}
      />
      <Navbar open={open} />
      <main>
        <h1>Contact</h1>
      </main>
    </>
  );
}
