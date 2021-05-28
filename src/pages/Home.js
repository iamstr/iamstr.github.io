import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/img/hamburger menu.svg";
import Profile from "../assets/img/pp.jpg";
import Navbar from "../components/Navbar";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img src={Menu} alt="" class="hamburger" onClick={() => setOpen(true)} />
      <Navbar open={open} />

      <main class="home">
        <article className="flex d-row justify-content-center profile">
          <img src={Profile} alt="my profile " className="profile-img" />
        </article>
        <article className=" info d-column justify-content-center flex">
          <h1>About</h1>

          <p className="info-para">
            Hello 👋 there! I'm <span class="underline">Abdisatar Mohamed</span>
            .Your Friendly Frontend Engineer
          </p>
        </article>

        <article>
          <Link to="about">
            <i class="fa fa-3x fa-linkedin-square"></i>
          </Link>
          <Link to="about">
            <i class="fa fa-3x fa-envelope-o"></i>
          </Link>
          <Link to="about">
            <i class="fa fa-3x fa-twitter-square"></i>
          </Link>
          <Link to="about">
            <i class="fa fa-3x fa-github-square"></i>
          </Link>
        </article>
        <article className="cta  d-row justify-content-center flex">
          <Link to="/projects">
            <button className="cta-btn"> View Portfolio</button>
          </Link>
        </article>
      </main>
    </>
  );
}
