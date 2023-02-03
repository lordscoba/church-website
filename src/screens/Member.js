import React from "react";
import { NavbarMenu } from "../components/Layout";
import { memberMain } from "../images";
import { Welcome, Form } from "../components/Member";

const Member = () => {
  const background_image = {
    backgroundImage: `url(${memberMain})`,
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
      <Form />
    </div>
  );
};

export default Member;
