import { Box, Typography } from "@mui/material";
import React from "react";
import fridge from "../../../assets/img/10bb.webp";
import beers from "../../../assets/img/11bb.webp";

const Help = () => {
  return (
    <Box
      className="main"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginY: "5rem",
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
          src={fridge}
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
          textWrap: "wrap",
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
          They decided to{" "}
          <span style={{ color: "red" }}>help, opened the fridge,</span>and
          grabbed the beer,
          <span style={{ color: "red" }}>ready for a </span>strange yet friendly
          encounter.
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
          src={beers}
          alt="shocked"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default Help;
