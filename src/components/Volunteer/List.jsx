import React from "react";
import { listImage1, listImage2 } from "../../images";

const listDetails = [
  {
    title: "Sunday school",
    text: "Be the first to welcome guests as soon as they arrive, answer any questions people might have, help find the best seats available, and pray with those who just made the most important decision of their lives: accepting Christ.",
    button: "Join Sunday school Team",
    background: listImage2,
  },
  {
    title: "Evangelism",
    text: "Our church is a place where you will find acceptance, encouragement, and support no matter where you are on your spiritual journey. We offer a variety of worship services, Bible studies, and other programs to help you grow in your faith and connect with others.",
    button: "Join Evangelism Team",
    background: listImage1,
  },
  {
    title: "Sunday school",
    text: "Be the first to welcome guests as soon as they arrive, answer any questions people might have, help find the best seats available, and pray with those who just made the most important decision of their lives: accepting Christ.",
    button: "Join Sunday school Team",
    background: listImage2,
  },
  {
    title: "Evangelism",
    text: "Our church is a place where you will find acceptance, encouragement, and support no matter where you are on your spiritual journey. We offer a variety of worship services, Bible studies, and other programs to help you grow in your faith and connect with others.",
    button: "Join Evangelism Team",
    background: listImage1,
  },
  {
    title: "Counselling",
    text: "Our church is a place where you will find acceptance, encouragement, and support no matter where you are on your spiritual journey. We offer a variety of worship services, Bible studies, and other programs to help you grow in your faith and connect with others.",
    button: "Join Counselling Team",
    background: listImage2,
  },
  {
    title: "Youth",
    text: "Our church is a place where you will find acceptance, encouragement, and support no matter where you are on your spiritual journey. We offer a variety of worship services, Bible studies, and other programs to help you grow in your faith and connect with others.",
    button: "Join Youth Team",
    background: listImage1,
  },
  {
    title: "Women fellowship",
    text: "Be the first to welcome guests as soon as they arrive, answer any questions people might have, help find the best seats available, and pray with those who just made the most important decision of their lives: accepting Christ.",
    button: "Join Women fellowship",
    background: listImage2,
  },
  {
    title: "Men fellowship",
    text: "Our church is a place where you will find acceptance, encouragement, and support no matter where you are on your spiritual journey. We offer a variety of worship services, Bible studies, and other programs to help you grow in your faith and connect with others.",
    button: "Join Men fellowship",
    background: listImage1,
  },
];

const List = () => {
  return (
    <section>
      <div className="row p-4 p-lg-5">
        <div className="col-9 col-lg-6">
          <h1 className="float-start fst-italic">
            Make a difference by volunteering with us
          </h1>
        </div>
      </div>
      <div className="row g-3 p-4 p-lg-5">
        {listDetails?.map((inside) => {
          const background_image = {
            backgroundImage: `url(${inside?.background})`,
            maxHeight: "auto",
            maxWidth: "100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          };
          return (
            <div className="col-12 col-lg-6 vstack">
              <div className="rounded-3" style={background_image}>
                <div
                  className="row align-items-end"
                  style={{ width: "100px", height: "250px" }}
                >
                  <div className="col-8">
                    <h2 className="text-white p-4 fst-italic text-nowrap">
                      {inside?.title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <p>{inside?.text}</p>
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn btn-outline-dark rounded-5 text-nowrap"
                >
                  {inside?.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default List;
