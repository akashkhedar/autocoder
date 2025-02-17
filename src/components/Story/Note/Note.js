import React, { useState } from "react";
import { Box, Typography, Modal, Button } from "@mui/material";
import eight from "../../../assets/img/7b.webp";
import { styled } from "@mui/system";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Note = ({ setEntry }) => {
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".eight-img", {
      scrollTrigger: {
        trigger: ".eight-container", // Target the parent container
        start: "top top", // When the top of the container hits the top of the viewport
        end: "top top", // Keep it consistent until the container moves out of view
        scrub: true,
        onEnter: () => setOpen(true), // Open the modal when the container hits the top
      },
    });
  });

  return (
    <Box
      className="eight-container"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        padding: "2rem",
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          width: "40%",
          height: "0vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
          color: "white",
          paddingRight: "2rem",
        }}
      >
        <Typography
          variant="h4"
          className="jolly-lodger-regular"
          style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
          sx={{
            color: "white",
            fontSize: "7rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "2px 2px 5px rgba(255, 0, 0, 0.7)",
          }}
        >
          <span style={{ color: "red" }}> They spot a note </span>on the fridge,
          <span style={{ color: "red" }}> its faded ink</span> barely legible.
        </Typography>
      </Box>

      {/* Image Section */}
      <Box
        className="eight-img"
        sx={{
          width: "40%",
          height: "70vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
          boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.5)",
        }}
      >
        <img
          src={eight}
          alt="Eerie Scene"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </Box>

      {/* Modal for the pop-up */}
    </Box>
  );
};

export default Note;
