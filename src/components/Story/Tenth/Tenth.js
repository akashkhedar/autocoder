import { Box, Typography } from "@mui/material";
import React from "react";

import chair from "../../../assets/img/9a.webp";
import shocked from "../../../assets/img/10a.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Tenth = () => {
  return (
    <Box
      className="main"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Image of the chair */}
      <Box
        sx={{
          height: "80vh", // Adjusted height for image size
          width: "200vw", // Adjusted width
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={chair}
          alt="chair"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Text section */}
      <Box
        sx={{
          height: "60vh", // Adjusted height for consistency
          minWidth: "10vw", // Adjusted width for text box
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          className="jolly-lodger-regular"
          style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
          sx={{
            color: "white",
            fontSize: { xs: "3rem", sm: "4rem", lg: "5rem" }, // Adjust font size for responsiveness
            padding: "1rem",
            textAlign: "center", // Ensuring text is centered
          }}
        >
          They froze as a <span style={{ color: "red" }}>rocking chair</span>{" "}
          gently creaked,{" "}
          <span style={{ color: "red" }}>moving on its own</span> loomed—dark,{" "}
          <span style={{ color: "red" }}>in the dim light</span>
        </Typography>
      </Box>

      {/* Image of shocked character */}
      <Box
        sx={{
          height: "80vh", // Adjusted height for image size
          width: "200vw", // Adjusted width
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={shocked}
          alt="shocked"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default Tenth;
