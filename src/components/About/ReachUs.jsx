import React from "react";
import Form from "react-bootstrap/Form";
import { map } from "../../images";

const ReachUs = () => {
  return (
    <section className="text-white" style={{ backgroundColor: "#272727" }}>
      <div className="row p-5">
        <div className="col-12 col-lg-6 vstack p-5">
          <h1 className="mb-5">Reach Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
            adipiscing netus sapien enim etiam sit. Proin dui augue mattis
            lorem. Nunc rutrum pharetra id a dictum venenatis sodales
            ullamcorper. Bibendum at vitae tristique viverra massa
          </p>
        </div>
        <div className="col-12 col-lg-6 p-5">
          <Form>
            <div className="row">
              <div className="col-6">
                <Form.Group
                  className="mb-3 form-outline-primary"
                  controlId="form1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="border border-light border-1"
                    style={{ backgroundColor: "#272727", color: "white" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form2">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="border border-light border-1"
                    style={{ backgroundColor: "#272727", color: "white" }}
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group className="mb-3" controlId="form1">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    className="border border-light border-1"
                    style={{ backgroundColor: "#272727", color: "white" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form2">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    className="border border-light border-1"
                    style={{ backgroundColor: "#272727", color: "white" }}
                  />
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="border border-light border-1"
                    style={{ backgroundColor: "#272727", color: "white" }}
                  />
                </Form.Group>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-outline-light rounded-5 offset-5"
              style={{ fontFamily: "satoshi" }}
            >
              &nbsp; &nbsp; Submit &nbsp; &nbsp;
            </button>
          </Form>
        </div>
      </div>
      <div className="row p-5">
        <div className="col-12 col-lg-6 p-5">
          <div className="mb-5">
            <h6>CALL US</h6>
            <p>
              230-689-8106
              <br />
              488-804-0277
            </p>
          </div>
          <div className="my-auto">
            <h6>EMAIL US</h6>
            <p>foursquareoniru@gmail.com</p>
          </div>
          <div className="mt-5">
            <h6>ADDRESS</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesen
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-5">
          <img className="img-fluid rounded-4" src={map} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ReachUs;
