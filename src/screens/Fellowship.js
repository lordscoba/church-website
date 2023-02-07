import React from "react";
import { Welcome } from "../components/Fellowship";
import { NavbarMenu } from "../components/Layout";
import { fellowshipHero } from "../images";

const fellowship = () => {
  const background_image = {
    backgroundImage: `url(${fellowshipHero})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <header style={background_image}>
        <NavbarMenu />
        <Welcome />
      </header>
    </div>
  );
};

export default fellowship;
