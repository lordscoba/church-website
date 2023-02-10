import React from "react";
import {
  ChildrenMedia1,
  ChildrenMedia2,
  ChildrenMedia3,
  ChildrenMedia4,
  ChildrenMedia5,
  ChildrenMedia6,
  ChildrenMedia7,
  ChildrenMedia8,
} from "../../images/gallery";
import { MediaRow1, MediaRow2, GalleryRow } from "../IntercessorsChurch";
import { wavyBorderWhite, wavyBorderYellow } from "../../images";

const Title1 = "Children’s Day";
const Text1 =
  "Our youth group is a community of young people who are passionat about growing in their faith and making a difference in the world.";
const Title2 = "Children Outreach";
const Text2 =
  "Our youth group is a community of young people who are passionat about growing in their faith and making a difference in the world.";

const Gallery = () => {
  const background_image = {
    backgroundImage: `url(${wavyBorderYellow})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "top",
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
  };
  return (
    <section id="gallery">
      <div className="py-5" style={background_image}>
        <h2 className="text-center fst-italic p-4">Children Gallery</h2>
        <MediaRow1
          Image1={ChildrenMedia1}
          Image2={ChildrenMedia2}
          Image3={ChildrenMedia3}
          Image4={ChildrenMedia4}
          Title1={Title1}
          Text1={Text1}
        />

        <MediaRow2
          Image5={ChildrenMedia5}
          Image6={ChildrenMedia6}
          Image7={ChildrenMedia7}
          Image8={ChildrenMedia8}
          Title2={Title2}
          Text2={Text2}
        />
      </div>
      <div className="py-5 my-0" style={{ backgroundColor: "#FFF4E7" }}>
        <GalleryRow />
      </div>
    </section>
  );
};

export default Gallery;
