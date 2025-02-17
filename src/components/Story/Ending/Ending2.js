import React from "react";
import happy from "../../../assets/img/15bb.webp";
import { Box } from "@mui/material";

const Ending2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.7)", // enhanced shadow for better effect
      }}
    >
      <img
        src={happy}
        alt="Mysterious Scene"
        style={{
          objectFit: "cover",
          width: "80%", // Adjust to make the image fully cover the container
          height: "80%", // Ensure image takes full height
          borderRadius: "10px",
          transition: "transform 0.3s ease-out",
        }}
      />
    </Box>
  );
};

export default Ending2;
