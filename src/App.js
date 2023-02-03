import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import {
  Home,
  About,
  Events,
  RequestPrayer,
  Video,
  Volunteer,
  Member,
  Events_details,
} from "./screens";
// import Events_details from "./screens/Events_details";
import {
  Giving,
  GivingDetails,
  GivingOnline,
  GivingSuccessful,
} from "./screens/Giving";
// import Volunteer from "./screens/Volunteer";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/request-prayer" element={<RequestPrayer />} />
          <Route path="/video" element={<Video />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/member" element={<Member />} />
          <Route path="/events-details" element={<Events_details />} />
        </Routes>
        <Routes>
          <Route path="/giving" element={<Giving />} />
          <Route path="/giving-online" element={<GivingOnline />} />
          <Route path="/giving-details" element={<GivingDetails />} />
          <Route path="/giving-successful" element={<GivingSuccessful />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
