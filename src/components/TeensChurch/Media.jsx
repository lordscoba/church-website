import React from "react";
import {
  TeensMedia1,
  TeensMedia2,
  TeensMedia3,
  TeensMedia4,
  TeensMedia5,
  TeensMedia6,
  TeensMedia7,
  TeensMedia8,
} from "../../images/gallery";
import { MediaRow1, MediaRow2, GalleryRow } from "../IntercessorsChurch";

const Title1 = "Outreach Event";
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
        Image1={TeensMedia1}
        Image2={TeensMedia2}
        Image3={TeensMedia3}
        Image4={TeensMedia4}
        Title1={Title1}
        Text1={Text1}
      />
      <MediaRow2
        Image5={TeensMedia5}
        Image6={TeensMedia6}
        Image7={TeensMedia7}
        Image8={TeensMedia8}
        Title2={Title2}
        Text2={Text2}
      />
      <GalleryRow />
    </section>
  );
};
export default Media;
