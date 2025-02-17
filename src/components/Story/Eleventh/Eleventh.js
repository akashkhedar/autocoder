import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import look from "../../../assets/img/16.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Eleventh = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.from(".bang", {
      scale: 0,
      opacity: 0,
      delay: 2,
      ease: "power4.out",
    });
    gsap.to(contentRef.current, {
      x: "-25vw", // Moves text slightly left
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "600%",
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
          One of them turns back,{" "}
          <span style={{ color: "red" }}> heart racing, </span>
          eyes searching the <span style={{ color: "red" }}>darkened</span>{" "}
          hallway behind
        </Typography>

        {/* Image Section */}
        <Box
          sx={{
            display: "flex",
            height: "80vh",
            width: "75vw",
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
            src={look}
            alt="Mysterious Scene"
            style={{
              objectFit: "cover",
              width: "70%",
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

export default Eleventh;
