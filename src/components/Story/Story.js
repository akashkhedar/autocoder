import React, { useState } from "react";
import StoryStart from "./StoryStart/StoryStart";
import Intro from "./Intro/Intro";
import { Box } from "@mui/system";
import Second from "./Second/Second";
import Third from "./Third/Third";
import Fourth from "./Fourth/Fourth";
import Fifth from "./Fourth/Fifth";
import Combined from "./Fourth/Combined";
import Window from "./Window/Window";
import CombinedWindow from "./Window/CombinedWindow";

const Story = () => {
  const [entry, setEntry] = useState("");
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "black",
      }}
    >
      <StoryStart />
      <Intro />
      <Second />
      <Third setEntry={setEntry} />
      {entry === "Door" ? <Combined /> : <CombinedWindow />}
    </Box>
  );
};

export default Story;
