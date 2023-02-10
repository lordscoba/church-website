import React from "react";
import {
  InterMedia1,
  InterMedia2,
  InterMedia3,
  InterMedia4,
  InterMedia5,
  InterMedia6,
  InterMedia7,
  InterMedia8,
} from "../../images/gallery";

import { MediaRow1, MediaRow2, GalleryRow } from "../IntercessorsChurch";

const Title1 = "Youth Outreach Event";
const Text1 =
  "Our youth group is a community of young people who are passionat about growing in their faith and making a difference in the world.";
const Title2 = "Youth Outreach Event";
const Text2 =
  "Our youth group is a community of young people who are passionat about growing in their faith and making a difference in the world.";

const Explore = () => {
  return (
    <section id="explore">
      <h2 className="text-center fst-italic p-4">
        Explore our collection of media resources
      </h2>
      <MediaRow1
        Image1={InterMedia1}
        Image2={InterMedia2}
        Image3={InterMedia3}
        Image4={InterMedia4}
        Title1={Title1}
        Text1={Text1}
      />
      <MediaRow2
        Image5={InterMedia5}
        Image6={InterMedia6}
        Image7={InterMedia7}
        Image8={InterMedia8}
        Title2={Title2}
        Text2={Text2}
      />
      <GalleryRow />
    </section>
  );
};

export default Explore;
