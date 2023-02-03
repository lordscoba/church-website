import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home, About, Events, RequestPrayer } from "./screens";
import {
  Giving,
  GivingDetails,
  GivingOnline,
  GivingSuccessful,
} from "./screens/Giving";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/request-prayer" element={<RequestPrayer />} />
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
