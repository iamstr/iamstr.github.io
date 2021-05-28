import React, { useState } from "react";
import Menu from "../assets/img/hamburger menu.svg";
import BTS from "../assets/img/Icon awesome-bootstrap.svg";
import Gulp from "../assets/img/Icon awesome-gulp.svg";
import JS from "../assets/img/Icon awesome-js-square.svg";
import RCT from "../assets/img/Icon awesome-react.svg";
import SASS from "../assets/img/Icon awesome-sass.svg";
import LINT from "../assets/img/Icon simple-eslint.svg";
import GATSBY from "../assets/img/Icon simple-gatsby.svg";
import NEXT from "../assets/img/Icon simple-next-dot-js.svg";
import WB from "../assets/img/Icon simple-webpack.svg";
import CSS3 from "../assets/img/Path 4.svg";
import Navbar from "../components/Navbar";

export default function Skills() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <img src={Menu} alt="" class="hamburger" onClick={() => setOpen(!open)} />
      <Navbar open={open} />

      <main>
        <article></article>
        <h1>Skills</h1>
        <article className="flex justify-content-between flex-row skill-container">
          <img src={JS} alt="" />
          <img src={SASS} alt="" />
          <img src={RCT} alt="" />
          <img src={CSS3} alt="" />
        </article>
        <h3>Build Tools</h3>
        <article className="flex justify-content-between flex-row skill-container">
          <img src={Gulp} alt="" />
          <img src={WB} alt="" />
          <img src={LINT} alt="" />
        </article>

        <h3>Frameworks</h3>
        <article className="flex justify-content-between flex-row skill-container">
          <img src={GATSBY} alt="" />
          <img src={NEXT} alt="" />
        </article>
        <h3>UI</h3>
        <article className="flex justify-content-between flex-row skill-container">
          <img src={BTS} alt="" />
        </article>
      </main>
    </>
  );
}
