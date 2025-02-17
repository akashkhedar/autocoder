import { useGSAP } from "@gsap/react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import second from "../../../assets/img/2.webp";
import mansionview from "../../../assets/audio/mansion-view.mp3";

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);
  const audioRef = useRef(new Audio(mansionview)); // Audio reference

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .catch((err) => console.error("Error playing audio:", err));
      }
    };

    const pauseAudio = () => {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset audio
      }
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top", // When the box reaches the top
      end: "+=100", // Short trigger range
      onEnter: playAudio,
      onLeaveBack: pauseAudio,
    });

    return () => {
      scrollTrigger.kill();
      pauseAudio(); // Stop audio if component unmounts
    };
  }, []);

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
        <Typography
          variant="h2"
          className="jolly-lodger-regular"
          fontFamily={"Jolly Lodger, serif"}
          sx={{
            color: "white",
            fontSize: "4rem",
            padding: "1rem",
          }}
        >
          Through the <span style={{ color: "red" }}>fog</span>, a towering{" "}
          <span style={{ color: "red" }}>mansion</span> loomed—dark,{" "}
          <span style={{ color: "red" }}>silent</span>, and unsettling
        </Typography>

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
            src={second}
            alt="Haunted Mansion"
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

export default Second;
