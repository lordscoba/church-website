import React from "react";
import { Successful } from "../../components/Giving/Successful";
import { Welcome } from "../../components/Giving/Online";
import { NavbarMenu } from "../../components/Layout";
import { bibleSmall } from "../../images";

const GivingSuccessful = () => {
  const background_image = {
    backgroundImage: `url(${bibleSmall})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <header style={background_image}>
        <NavbarMenu />
        <Welcome />
      </header>
      <Successful />
    </div>
  );
};

export default GivingSuccessful;
