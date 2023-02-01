import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home, About, Events, RequestPrayer } from "./screens";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/request_prayer" element={<RequestPrayer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
