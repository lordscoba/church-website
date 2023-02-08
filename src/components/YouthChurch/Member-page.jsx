import React from "react";

const MemberPage = () => {
  return (
    <section>
      <Row1 />
    </section>
  );
};

const Row1 = () => {
  return (
    <div className="row">
      <div className="text-white col-12 col-md-6 col-lg-6 p-5">
        <h3 className="display-4 fst-italic">
          Welcome to the youth ministry at our church!
        </h3>
      </div>
      <div className="text-white col-12 col-md-6 col-lg-6 p-5 ">
        <p>
          Our youth group is a community of young people who are passionate
          about growing in their faith and making a difference in the world. We
          believe that God has a unique purpose for each of our lives, and we
          want to help you discover and live out that purpose.
        </p>
        <button className="btn btn-outline-light rounded-5 me-3">
          Become a member
        </button>
        <button className="btn btn-outline-light rounded-5">Support Us</button>
      </div>
    </div>
  );
};

export default MemberPage;
