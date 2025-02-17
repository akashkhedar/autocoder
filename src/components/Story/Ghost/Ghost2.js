import React from "react";
import { Box } from "@mui/material";
import ghost from "../../../assets/img/12bb.webp";

const Ghost2 = () => {
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
        src={ghost}
        alt="run"
        style={{
          width: "50%", // Adjust the width to make the image smaller
          height: "auto", // Maintain the aspect ratio of the image
          objectFit: "contain", // Ensures the image is contained within its container
          maxWidth: "100%", // Prevents it from stretching beyond container
          maxHeight: "100%", // Prevents it from stretching beyond container
        }}
      />
    </Box>
  );
};

export default Ghost2;
