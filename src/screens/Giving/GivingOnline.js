import React from "react";
import { Welcome, Payment } from "../../components/Giving/Online";
import { NavbarMenu } from "../../components/Layout";
import { bibleSmall } from "../../images";

const GivingOnline = () => {
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
      <Payment />
    </div>
  );
};

export default GivingOnline;
