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
  Fellowship,
} from "./screens";
import {
  Giving,
  GivingDetails,
  GivingOnline,
  GivingSuccessful,
} from "./screens/Giving";

import {
  YouthChurch,
  IntercessorsChurch,
  LadiesFellowship,
  FamilyChurch,
  TeensChurch,
  AdultChurch,
  MenChurch,
  ChildrenChurch,
  YouthGallery,
} from "./screens/Church";

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
          <Route path="/fellowship" element={<Fellowship />} />
        </Routes>
        <Routes>
          <Route path="/giving" element={<Giving />} />
          <Route path="/giving-online" element={<GivingOnline />} />
          <Route path="/giving-details" element={<GivingDetails />} />
          <Route path="/giving-successful" element={<GivingSuccessful />} />
        </Routes>
        <Routes>
          <Route path="/youth-church" element={<YouthChurch />} />
          <Route path="/intercessors-church" element={<IntercessorsChurch />} />
          <Route path="/ladies-fellowship" element={<LadiesFellowship />} />
          <Route path="/family-church" element={<FamilyChurch />} />
          <Route path="/teens-church" element={<TeensChurch />} />
          <Route path="/adult-church" element={<AdultChurch />} />
          <Route path="/men-church" element={<MenChurch />} />
          <Route path="/children-church" element={<ChildrenChurch />} />
          <Route path="/youth-gallery" element={<YouthGallery />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
