import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Ghost = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".bang",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        delay: 1,
        ease: "power4.out",
        duration: 2,
      }
    );

    gsap.to(contentRef.current, {
      x: "-45vw",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "750%",
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
          width: "100%",
          gap: "1rem",
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
          As they popped open
          <span style={{ color: "red" }}> the beers, the ghost appeared </span>,
          slowly materializing{" "}
          <span style={{ color: "red" }}>with a smile, </span>ready to join them
          for a drink
        </Typography>
      </Box>
    </Box>
  );
};

export default Ghost;
