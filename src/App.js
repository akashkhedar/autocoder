import { Box } from "@mui/material";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import StoryStart from "./components/Story/StoryStart/StoryStart";
import Story from "./components/Story/Story";

const App = () => {
  return (
    <Router>
      <Box
        sx={{ overflow: "hidden", position: "relative", background: "black" }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/horror" element={<Story />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
