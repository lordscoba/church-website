import React from "react";
import { manEyeGlass } from "../../images";

export const Testimonies = () => {
  return (
    <section className="" style={{ background: "#FFA739" }}>
      <div className="row">
        <div className="col hstack row align-items-start my-4">
          <div className="col-6">
            <img
              style={{ maxheight: "100%" }}
              className="img-fluid rounded-4"
              src={manEyeGlass}
              alt=""
            />
          </div>
          <div className="col-6" style={{ fontSize: "12px" }}>
            <h2>Testimonies</h2>
            <p>
              I have been a member of this church for over 10 years now, and I
              can confidently say that it has been one of the most important and
              meaningful parts of my life.
              <br />
              When I first started attending, I was going through a difficult
              time in my life and felt lost and alone. But from the moment I
              walked through the doors, I felt a sense of warmth and acceptance.
              The people at this church truly became my family, and I found a
              sense of belonging that I had been missing.
              <br />
              Through the years, I have grown in my faith and understanding of
              God's love for me. The youth ministry and small group Bible
              studies have been especially instrumental in helping me to develop
              a deeper relationship with God. I have also been blessed to form
              friendships with other members of the church that have lasted a
              lifetime.
              <br />I have also been able to get involved and serve in various
              ways such as volunteering at events, participating in mission
              trips, and using my talents and skills to serve in the church.
              <br /> I am so grateful for this church and all that it has done
              for me. It has been a place of healing, growth, and community. I
              would highly recommend it to anyone looking for a place to belong
              and grow in their faith.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
