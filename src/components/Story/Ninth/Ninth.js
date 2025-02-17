import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import ninth from "../../../assets/img/8a.webp";

const Ninth = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {/* Text Section */}
      <Box ref={textRef} sx={{ marginBottom: "1.5rem", maxWidth: "80%" }}>
        <Typography
          variant="h4"
          className="jolly-lodger-regular"
          style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
          sx={{
            color: "white", // Default text color is white
            fontSize: "2rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "2px 2px 5px rgba(255, 0, 0, 0.7)",
          }}
        >
          <span style={{ color: "red" }}> They cautiously moved upstairs,</span>
          <br />
          <span style={{ color: "white" }}>
            {" "}
            the eerie noise growing louder
          </span>
        </Typography>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          width: "80%",
          height: "80%",
          overflow: "hidden",
          borderRadius: "15px",
          boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.5)",
        }}
      >
        <img
          ref={imgRef}
          src={ninth}
          alt="Eerie Upstairs Scene"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default Ninth;
