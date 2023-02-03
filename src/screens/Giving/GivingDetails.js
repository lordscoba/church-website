import React from "react";
import { Confirmation } from "../../components/Giving/Details";
import { Welcome } from "../../components/Giving/Online";
import { NavbarMenu } from "../../components/Layout";
import { bibleSmall } from "../../images";

const GivingDetails = () => {
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
      <Confirmation />
    </div>
  );
};

export default GivingDetails;
