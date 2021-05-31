import React, { useState } from "react";
import { Link } from "react-router-dom";
import IMG1 from "../assets/img/giphy.png";
import Menu from "../assets/img/hamburger menu.svg";
import Navbar from "../components/Navbar";
export default function Projects() {
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

      <main className="main">
        <h1>Projects</h1>
        <section className="cards">
          <article className="card flex d-column">
            <img src={IMG1} alt="" className="card-img" />
            <div className="card-info">
              <h4 className="card-header">Project 1</h4>
              <p className="card-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem molestias sapiente aperiam quibusdam nobis. Quaerat
                voluptatem eligendi dolorum sed asperiores...
              </p>
            </div>

            <div className="card-btns flex d-row justify-content-between">
              <Link to="/projects">
                <button className="btn-outline">More info</button>
              </Link>
              <Link to="/projects">
                <button className="btn-outline-white">Check repo</button>
              </Link>
            </div>
          </article>
          <article className="card flex d-column">
            <img src={IMG1} alt="" className="card-img" />
            <div className="card-info">
              <h4 className="card-header">Project 1</h4>
              <p className="card-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem molestias sapiente aperiam quibusdam nobis. Quaerat
                voluptatem eligendi dolorum sed asperiores...
              </p>
            </div>

            <div className="card-btns flex d-row justify-content-between">
              <Link to="/projects">
                <button className="btn-outline">More info</button>
              </Link>
              <Link to="/projects">
                <button className="btn-outline-white">Check repo</button>
              </Link>
            </div>
          </article>
          <article className="card flex d-column">
            <img src={IMG1} alt="" className="card-img" />
            <div className="card-info">
              <h4 className="card-header">Project 1</h4>
              <p className="card-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem molestias sapiente aperiam quibusdam nobis. Quaerat
                voluptatem eligendi dolorum sed asperiores...
              </p>
            </div>

            <div className="card-btns flex d-row justify-content-between">
              <Link to="/projects">
                <button className="btn-outline">More info</button>
              </Link>
              <Link to="/projects">
                <button className="btn-outline-white">Check repo</button>
              </Link>
            </div>
          </article>
          <article className="card flex d-column">
            <img src={IMG1} alt="" className="card-img" />
            <div className="card-info">
              <h4 className="card-header">Project 1</h4>
              <p className="card-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem molestias sapiente aperiam quibusdam nobis. Quaerat
                voluptatem eligendi dolorum sed asperiores...
              </p>
            </div>

            <div className="card-btns flex d-row justify-content-between">
              <Link to="/projects">
                <button className="btn-outline">More info</button>
              </Link>
              <Link to="/projects">
                <button className="btn-outline-white">Check repo</button>
              </Link>
            </div>
          </article>
          <article className="card flex d-column">
            <img src={IMG1} alt="" className="card-img" />
            <div className="card-info">
              <h4 className="card-header">Project 1</h4>
              <p className="card-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem molestias sapiente aperiam quibusdam nobis. Quaerat
                voluptatem eligendi dolorum sed asperiores...
              </p>
            </div>

            <div className="card-btns flex d-row justify-content-between">
              <Link to="/projects">
                <button className="btn-outline">More info</button>
              </Link>
              <Link to="/projects">
                <button className="btn-outline-white">Check repo</button>
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
