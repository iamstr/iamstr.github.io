import React, { useState } from "react";
import Point from "../assets/img/Ellipse 3.svg";
import Menu from "../assets/img/hamburger menu.svg";
import Navbar from "../components/Navbar";

export default function Experience() {
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
      <main className="main-experience">
        <h1 className="headline">Experience</h1>

        <section className="experience">
          <article className="experience-info flex d-row">
            <img src={Point} alt="" className="job-ellipse" />
            <div className="job-info">
              <h4 className="job-title">Job 1 </h4>
              <h6 className="job-years">Jan 2018 - April 2019</h6>
              <p className="job-para">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
            </div>
          </article>
          <article className="experience-info flex d-row">
            <img src={Point} alt="" className="job-ellipse" />
            <div className="job-info">
              <h4 className="job-title">Job 1 </h4>
              <h6 className="job-years">Jan 2018 - April 2019</h6>
              <p className="job-para">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
            </div>
          </article>
          <article className="experience-info flex d-row">
            <img src={Point} alt="" className="job-ellipse" />
            <div className="job-info">
              <h4 className="job-title">Job 1 </h4>
              <h6 className="job-years">Jan 2018 - April 2019</h6>
              <p className="job-para">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
