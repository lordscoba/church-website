import React, { useState } from "react";
import { manEyeGlass } from "../../images";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const settings = {
  // className: "center",
  // centerMode: true,
  infinite: true,
  // fade: true,
  // centerPadding: "30px",
  slidesToShow: 1,
  speed: 500,
  initialSlide: 0,
  adaptiveHeight: true,
  slidesToScroll: 1,
  swipeToSlide: true,
};

const Testimonies = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <section
      className="px-4 py-2"
      style={{ background: "#FFA739", height: "auto", overflowY: "hidden" }}
    >
      <Slider className="" ref={setSliderRef} {...settings}>
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
      </Slider>
    </section>
  );
};

const Testimony = () => {
  return (
    <div className="row g-2 d-flex pe-2">
      <div className="col-5 col-md-5 col-lg-6">
        <img
          style={{ objectFit: "cover" }}
          className="img-fluid rounded-4  w-100 h-75 border border-dark border-4"
          src={manEyeGlass}
        />
      </div>
      <div
        className="col-7 col-md-7 col-lg-6 d-none d-md-none d-lg-block"
        // style={{ height: "auto", overflowY: "auto" }}
      >
        <div className="border border-dark border-3 rounded-4 p-5">
          <h2 style={{ fontSize: "60px" }}>Testimonies</h2>
          <p className="h-100 overflow-y-auto" style={{ fontSize: "" }}>
            I have been a member of this church for over 10 years now, and I can
            confidently say that it has been one of the most important and
            meaningful parts of my life.
            <br />
            When I first started attending, I was going through a difficult time
            in my life and felt lost and alone. But from the moment I walked
            through the doors, I felt a sense of warmth and acceptance. The
            people at this church truly became my family, and I found a sense of
            belonging that I had been missing.
            <br />
            Through the years, I have grown in my faith and understanding of
            God's love for me. The youth ministry and small group Bible studies
            have been especially instrumental in helping me to develop a deeper
            relationship with God. I have also been blessed to form friendships
            with other members of the church that have lasted a lifetime.
            <br />I have also been able to get involved and serve in various
            ways such as volunteering at events, participating in mission trips,
            and using my talents and skills to serve in the church.
            <br /> I am so grateful for this church and all that it has done for
            me. It has been a place of healing, growth, and community. I would
            highly recommend it to anyone looking for a place to belong and grow
            in their faith.
          </p>
        </div>
      </div>
      <div
        className="col-7 col-md-7 col-lg-6 d-none d-md-block d-lg-none border border-dark border-3 rounded-4 p-2"
        style={{ height: "400px", overflowY: "auto" }}
      >
        <div className="">
          <h2 style={{ fontSize: "20px" }}>Testimonies</h2>
          <p className="h-100 overflow-y-auto" style={{ fontSize: "15px" }}>
            I have been a member of this church for over 10 years now, and I can
            confidently say that it has been one of the most important and
            meaningful parts of my life.
            <br />
            When I first started attending, I was going through a difficult time
            in my life and felt lost and alone. But from the moment I walked
            through the doors, I felt a sense of warmth and acceptance. The
            people at this church truly became my family, and I found a sense of
            belonging that I had been missing.
            <br />
            Through the years, I have grown in my faith and understanding of
            God's love for me. The youth ministry and small group Bible studies
            have been especially instrumental in helping me to develop a deeper
            relationship with God. I have also been blessed to form friendships
            with other members of the church that have lasted a lifetime.
            <br />I have also been able to get involved and serve in various
            ways such as volunteering at events, participating in mission trips,
            and using my talents and skills to serve in the church.
            <br /> I am so grateful for this church and all that it has done for
            me. It has been a place of healing, growth, and community. I would
            highly recommend it to anyone looking for a place to belong and grow
            in their faith.
          </p>
        </div>
      </div>
      <div
        className="col-7 col-md-7 col-lg-6 d-block d-md-none d-lg-none border border-dark border-3 rounded-4 p-2"
        style={{ height: "200px", overflowY: "auto" }}
      >
        <div className="">
          <h2 style={{ fontSize: "13px" }}>Testimonies</h2>
          <p className="h-50 overflow-y-auto" style={{ fontSize: "10px" }}>
            I have been a member of this church for over 10 years now, and I can
            confidently say that it has been one of the most important and
            meaningful parts of my life.
            <br />
            When I first started attending, I was going through a difficult time
            in my life and felt lost and alone. But from the moment I walked
            through the doors, I felt a sense of warmth and acceptance. The
            people at this church truly became my family, and I found a sense of
            belonging that I had been missing.
            <br />
            Through the years, I have grown in my faith and understanding of
            God's love for me. The youth ministry and small group Bible studies
            have been especially instrumental in helping me to develop a deeper
            relationship with God. I have also been blessed to form friendships
            with other members of the church that have lasted a lifetime.
            <br />I have also been able to get involved and serve in various
            ways such as volunteering at events, participating in mission trips,
            and using my talents and skills to serve in the church.
            <br /> I am so grateful for this church and all that it has done for
            me. It has been a place of healing, growth, and community. I would
            highly recommend it to anyone looking for a place to belong and grow
            in their faith.
          </p>
        </div>
      </div>
    </div>
  );
};

// const Testimony = () => {
//   return (
//     <div className="col-11 mx-auto my-4" style={{ height: "300px" }}>
//       <div className="row d-flex g-1 overflow-y-hidden h-100 w-100">
//         <div className="col-5 col-md-5 col-lg-6 image-div h-100 w-100">
//           <img
//             // style={{ maxHeight: "auto", maxWidth: "100%" }}
//             className="img-fluid rounded-4 testimony-image h-100 w-100"
//             src={manEyeGlass}
//             alt=""
//           />
//         </div>
//         <div className="col-6 col-md-7 col-lg-6 testimony-text p-2 h-100 w-100">
//           <h2 style={{ fontSize: "13px" }}>Testimonies</h2>
//           <p style={{ fontSize: "10px" }}>
// I have been a member of this church for over 10 years now, and I can
// confidently say that it has been one of the most important and
// meaningful parts of my life.
// <br />
// When I first started attending, I was going through a difficult time
// in my life and felt lost and alone. But from the moment I walked
// through the doors, I felt a sense of warmth and acceptance. The
// people at this church truly became my family, and I found a sense of
// belonging that I had been missing.
// <br />
// Through the years, I have grown in my faith and understanding of
// God's love for me. The youth ministry and small group Bible studies
// have been especially instrumental in helping me to develop a deeper
// relationship with God. I have also been blessed to form friendships
// with other members of the church that have lasted a lifetime.
// <br />I have also been able to get involved and serve in various
// ways such as volunteering at events, participating in mission trips,
// and using my talents and skills to serve in the church.
// <br /> I am so grateful for this church and all that it has done for
// me. It has been a place of healing, growth, and community. I would
// highly recommend it to anyone looking for a place to belong and grow
// in their faith.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Testimonies;
