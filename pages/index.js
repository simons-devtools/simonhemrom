import {
  Header,
  Aboutme,
  Experiences,
  Features,
  Projects,
  Contactme,
} from "../compons";
import React, { Fragment } from "react";

export default function IndexPage() {
  return (
    <Fragment>
      <Header />
      <Aboutme />
      <Experiences />
      <Features />
      <Projects />
      <Contactme />
    </Fragment>
  );
}
