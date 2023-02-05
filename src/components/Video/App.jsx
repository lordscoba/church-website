import React from "react";
import { phone } from "../../images";
import { BsSpotify } from "react-icons/bs";
import { SiApplepodcasts, SiAnchor } from "react-icons/si";
import { IconContext } from "react-icons";

const App = () => {
  return (
    <section>
      <div
        className="row align-items-end"
        style={{ backgroundColor: "#272727" }}
      >
        <div className="col-6 col-lg-6 ps-5 pt-5">
          <div align="right">
            <img
              className="img-fluid w-100 d-block d-md-none"
              src={phone}
              alt=""
            />
          </div>
          <div align="right">
            <img
              className="img-fluid w-75 d-none d-md-block float-end"
              src={phone}
              alt=""
            />
          </div>
        </div>
        <div className="ms-0 col-6 col-lg-6 align-self-center">
          <p
            align="left"
            className="text-white my-2"
            style={{ fontSize: "10px" }}
          >
            Listen to
          </p>
          <h3 className="text-white my-2 fs-4 w-75 fw-light">
            Foursquare Gospel Church Oniru Podcast
          </h3>
          <button className="btn btn-primary my-2" style={{ fontSize: "12px" }}>
            Listen to Podcast
          </button>
          <ul
            className="ms-0 d-flex flex-row ps-0 ms-0 my-2"
            style={{ listStyleType: "none" }}
          >
            <li>
              <a
                className="ms-0 nav-link"
                href="#"
                style={{ color: "#56AF5A", fontSize: "15px" }}
              >
                <IconContext.Provider value={{ color: "#56AF5A" }}>
                  <BsSpotify />
                </IconContext.Provider>
                &nbsp; Spotify
              </a>
            </li>
            <li>
              <a
                className="nav-link mx-4"
                href="#"
                style={{ color: "#ffffff", fontSize: "15px" }}
              >
                <IconContext.Provider value={{ color: "#9562A8" }}>
                  <SiApplepodcasts />
                </IconContext.Provider>
                &nbsp; Apple podcasts
              </a>
            </li>
            <li>
              <a
                className="nav-link me-4"
                href="#"
                style={{ color: "#5000B9", fontSize: "15px" }}
              >
                <IconContext.Provider value={{ color: "#5000B9" }}>
                  <SiAnchor />
                </IconContext.Provider>
                &nbsp; Anchor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default App;
