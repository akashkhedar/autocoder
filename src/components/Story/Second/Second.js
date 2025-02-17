import { useGSAP } from "@gsap/react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import React, { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import second from "../../../assets/img/2.webp";

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to(contentRef.current, {
      x: "-40vw",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "800%",
        pin: true,
        scrub: true,
      },
    });

    gsap.fromTo(
      imgRef.current,
      {
        scale: 1,
        opacity: 0,
      },
      {
        scale: 1.5,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });

  return (
    <Box
      ref={containerRef}
      className="second-main"
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "black",
        justifyContent: "center",
      }}
    >
      <Box
        ref={contentRef}
        sx={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          gap: "1rem",
          transform: "translateX(20%)",
        }}
      >
        {/* Text Section */}
        <Typography
          variant="h2"
          className="jolly-lodger-regular"
          style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
          sx={{
            color: "white",
            fontSize: "4rem",
            padding: "1rem",
            minWidth: "auto",
          }}
        >
          Through the <span style={{ color: "red" }}>fog</span>, a towering{" "}
          <span style={{ color: "red" }}>mansion</span> loomed—dark,{" "}
          <span style={{ color: "red" }}>silent</span>, and unsettling
        </Typography>

        {/* Image Section */}
        <Box
          sx={{
            display: "flex",
            height: "90vh",
            width: "80vw", // Adjusted width
            maxWidth: "900px", // Optional: max width to prevent stretching on large screens
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5rem",
            padding: "1rem", // Add padding to create space between image and container edges
            overflow: "hidden",
            borderRadius: "10px", // Optional: rounded corners for the image box
            boxShadow: "0 4px 8px rgba(0,0,0,0.5)", // Optional: shadow effect
          }}
        >
          <img
            ref={imgRef}
            src={second}
            alt="Haunted Mansion"
            style={{
              objectFit: "cover",
              width: "80%", // Ensures image covers the width of the box
              height: "70%", // Ensures image covers the height of the box
              borderRadius: "10px", // Optional: rounded corners for the image
              transition: "transform 0.3s ease-out",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Second;
