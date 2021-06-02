import React, { useState } from "react";
import {
  FaEnvelope,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "../assets/img/hamburger menu.svg";
import Profile from "../assets/img/pp.jpg";
import Navbar from "../components/Navbar";
export default function Home() {
  const [open, setOpen] = useState(false);
  const width = window.innerWidth;
  // The width below which the mobile view should be rendered
  const breakpoint = 620;
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

        <article className="flex d-row justify-content-center home-icons">
          <Link
            to={{
              pathname:
                "https://www.linkedin.com/in/abdisatar-mohamed-8ab02714a/"
            }}
            target="_blank"
          >
            {/* <FontAwesomeIcon icon={["fas,fa-linkedin-square"]} /> */}
            <FaLinkedin />
          </Link>
          <Link
            to={{
              pathname: "mailto:asatar1994@gmail.com"
            }}
            target="_blank"
          >
            <FaEnvelope />
          </Link>
          <Link
            to={{ pathname: "https://twitter.com/iamsatarmovic" }}
            target="_blank"
          >
            <FaTwitterSquare />
          </Link>
          <Link to={{ pathname: "https://github.com/iamstr" }} target="_blank">
            <FaGithubSquare />
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
