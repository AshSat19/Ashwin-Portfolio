import classes from "./HomePage.module.css";
import MastHead from "../ui/MastHead/MastHead";
import Skills from "../ui/Skills/Skills";
import Experience from "../ui/Experience/Experience";
import Contact from "../ui/Contact/Contact";
import { Fragment } from "react";

import { ScrollTop } from "primereact/scrolltop";

function HomePage() {
  return (
    <Fragment>
      <div className={classes.heroImage}>
        <MastHead></MastHead>
        <Skills></Skills>
        <Experience></Experience>
        <Contact></Contact>
      </div>

      <ScrollTop threshold={100} />
    </Fragment>
  );
}

export default HomePage;
