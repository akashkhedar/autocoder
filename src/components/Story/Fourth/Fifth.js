import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import fifth from "../../../assets/img/6a.webp";

gsap.registerPlugin(ScrollTrigger);

const Fifth = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    // Adjusting animation for the text to make sure it appears
    gsap.fromTo(
      ".bang",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        delay: 1, // Adding a slight delay before the text appears
        ease: "power4.out",
        duration: 2, // Smooth transition over 2 seconds
      }
    );

    gsap.to(contentRef.current, {
      x: "-30vw", // Moves text slightly left
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
        scale: 1.3,
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
          variant="h1"
          className="bangers-regular bang"
          style={{ fontFamily: "Bangers, serif" }}
          sx={{
            color: "white",
            fontSize: "9vw", // Large text size, slightly smaller than viewport width
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "5px",
          }}
        >
          <span style={{ color: "red", fontSize: "25vw" }}>BANG!!</span>
        </Typography>

        {/* Image Section */}
        <Box
          sx={{
            display: "flex",
            height: "90vh",
            width: "80vw",
            maxWidth: "900px",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5rem",
            padding: "1rem",
            overflow: "hidden",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
          }}
        >
          <img
            ref={imgRef}
            src={fifth}
            alt="Mysterious Scene"
            style={{
              objectFit: "cover",
              width: "80%",
              height: "70%",
              borderRadius: "10px",
              transition: "transform 0.3s ease-out",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Fifth;
