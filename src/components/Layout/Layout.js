import React from "react";
import NavbarMenu from "./Navbar";
import Footer from "./Footer";
// import { Welcome } from "../Home";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* <header style={background_image}>
        <NavbarMenu />
      </header> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
