import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import fifth from "../../../assets/img/6a.webp";
import doorbreak from "../../../assets/audio/door-break.mp3";

gsap.registerPlugin(ScrollTrigger);

const Fifth = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);

  const audio = new Audio(doorbreak); // Create a new Audio instance

  useEffect(() => {
    // Play the audio when the component mounts (or adjust when you want to trigger the sound)
    const playAudio = () => {
      audio
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    };

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
        onStart: playAudio, // Play the audio when the animation starts
      }
    );

    gsap.to(contentRef.current, {
      x: "-30vw",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom", // Change the end position to 'bottom bottom' for a smoother transition
        pin: true,
        scrub: true,
        markers: true, // Optional: Helps visualize the start/end of the scroll animation
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
  }, [audio]); // Ensures audio is initialized when the component mounts

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
        position: "relative", // Add position relative to help with scroll pinning
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
            fontSize: "9vw",
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
