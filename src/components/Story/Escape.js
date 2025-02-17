import React from "react";
import run from "../../assets/img/17.webp";
import { Box } from "@mui/material";

const Escape = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "black",
        display: "flex", // Flexbox for centering
        justifyContent: "center", // Horizontally center the image
        alignItems: "center", // Vertically center the image
      }}
    >
      <img
        src={run}
        alt="run"
        style={{
          width: "100%", // Make sure the image takes up the full width of the container
          height: "auto", // Maintain the aspect ratio of the image
          objectFit: "cover", // Crop or scale the image to cover the container
        }}
      />
    </Box>
  );
};

export default Escape;
