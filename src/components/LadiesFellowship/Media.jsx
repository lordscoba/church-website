import React from "react";
import {
  LadiesMedia1,
  LadiesMedia2,
  LadiesMedia3,
  LadiesMedia4,
  LadiesMedia5,
  LadiesMedia6,
  LadiesMedia7,
  LadiesMedia8,
} from "../../images/gallery";
import { MediaRow1, MediaRow2, GalleryRow } from "../IntercessorsChurch";

const Title1 = "Ladies Fellowship";
const Text1 =
  "Our youth group is a community of young people who are passionat about growing in their faith and making a difference in the world.";
const Title2 = "Outreach Event";
const Text2 =
  "Our youth group is a community of young people who are passionat about growing in their faith and making a difference in the world.";

const Media = () => {
  return (
    <section>
      <h2 className="text-center fst-italic p-4">Our Media Collections</h2>
      <MediaRow1
        Image1={LadiesMedia1}
        Image2={LadiesMedia2}
        Image3={LadiesMedia3}
        Image4={LadiesMedia4}
        Title1={Title1}
        Text1={Text1}
      />
      <MediaRow2
        Image5={LadiesMedia5}
        Image6={LadiesMedia6}
        Image7={LadiesMedia7}
        Image8={LadiesMedia8}
        Title2={Title2}
        Text2={Text2}
      />
      <GalleryRow />
    </section>
  );
};

export default Media;
