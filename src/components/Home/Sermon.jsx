import React from "react";
import { prayerManStanding, singer, viewAll } from "../../images";
import { RiVoiceprintFill } from "react-icons/ri";

const Sermon = () => {
  const background = {
    backgroundColor: "#272727",
  };
  return (
    <section style={background} className="text-white">
      <h2 className=" p-3 d-flex fs-2">
        Watch Sermons
        <button className="mx-3 btn btn-primary rounded-4 text-nowrap">
          <RiVoiceprintFill /> Listen to Podcast
        </button>
      </h2>
      <div className="row m-2 p-2">
        <div className="col">
          <img className="img-fluid rounded-3" src={prayerManStanding} />
        </div>
      </div>
      <div className="row hstack p-1 g-2">
        <div className="col">
          <img className="img-fluid rounded-3" src={singer} />
          <div className="lh-1">
            <p style={{ fontSize: "10px" }}>
              Build a Strong Faith With God
              <br />
              <small>Pastor. Femi Seun</small>
            </p>
          </div>
        </div>
        <div className="col">
          <img className="img-fluid rounded-3" src={singer} />
          <div className="lh-1">
            <p style={{ fontSize: "7px" }}>
              Build a Strong Faith With God
              <br />
              <small>Pastor. Femi Seun</small>
            </p>
          </div>
        </div>
        <div className="col">
          <img className="img-fluid rounded-3" src={singer} />
          <div className="lh-1">
            <p style={{ fontSize: "7px" }}>
              Build a Strong Faith With God
              <br />
              <small>Pastor. Femi Seun</small>
            </p>
          </div>
        </div>
        <div className="col">
          <img className="img-fluid rounded-3" src={singer} />
          <div className="lh-1">
            <p style={{ fontSize: "7px" }}>
              Build a Strong Faith With God
              <br />
              <small>Pastor. Femi Seun</small>
            </p>
          </div>
        </div>
        <div className="col">
          <img
            style={{ width: "auto" }}
            className="img-fluid rounded-3 mt-0 pt-0"
            src={viewAll}
          />
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Sermon;
