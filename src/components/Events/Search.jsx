import React from "react";
import Form from "react-bootstrap/Form";
import { prayerManBending } from "../../images/";

const Search = () => {
  return (
    <section>
      <div className="row p-3 m-2">
        <div className="col-6 p-2">
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Search Events" />
            </Form.Group>
          </Form>
        </div>
        <div className="col-3 p-2">
          <Form.Group className="mb-3">
            <Form.Select>
              <option>New Events</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="col-3 p-2">
          <Form.Group className="mb-3">
            <Form.Select>
              <option>Date</option>
            </Form.Select>
          </Form.Group>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-4">
          <img className="img-fluid rounded-3" src={prayerManBending} alt="" />
          <small>December 17, 2022</small>
          <h4>40 Days Prayer and Fasting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. At pellentesque facilisi
            massa vestibulum pretium
          </p>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Learn More
          </button>
        </div>
        <div className="col-4 p-2">
          <img className="img-fluid rounded-3" src={prayerManBending} alt="" />
          <small>December 17, 2022</small>
          <h4>40 Days Prayer and Fasting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. At pellentesque facilisi
            massa vestibulum pretium
          </p>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Learn More
          </button>
        </div>
        <div className="col-4 p-2">
          <img className="img-fluid rounded-3" src={prayerManBending} alt="" />
          <small>December 17, 2022</small>
          <h4>40 Days Prayer and Fasting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. At pellentesque facilisi
            massa vestibulum pretium
          </p>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Learn More
          </button>
        </div>
        <div className="col-4 p-2">
          <img className="img-fluid rounded-3" src={prayerManBending} alt="" />
          <small>December 17, 2022</small>
          <h4>40 Days Prayer and Fasting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. At pellentesque facilisi
            massa vestibulum pretium
          </p>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;