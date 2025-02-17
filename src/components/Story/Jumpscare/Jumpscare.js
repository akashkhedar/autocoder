import { Box } from "@mui/material";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import audioFile from "../../../assets/audio/jumpscare.mp3";
import JumpscareGIF from "../../../assets/img/jumpscare.gif";

gsap.registerPlugin(ScrollTrigger);

const Jumpscare = () => {
  const audioRef = useRef(null); // Initialize as null

  useEffect(() => {
    audioRef.current = new Audio(audioFile); // Assign new audio instance on mount

    const playAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch((err) => {
          console.error("Error playing audio:", err);
        });
      }
    };

    const pauseAudio = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset audio to the start
      }
    };

    // GSAP ScrollTrigger animation setup
    const scrollTrigger = ScrollTrigger.create({
      trigger: ".jumpscareBox",
      start: "top 80%",
      end: "+=100%",
      scrub: true,
      onEnter: playAudio,
      onLeave: pauseAudio,
      onEnterBack: playAudio,
      onLeaveBack: pauseAudio,
    });

    // Clean up ScrollTrigger and audio on unmount
    return () => {
      scrollTrigger.kill();
      pauseAudio();
      audioRef.current = null; // Ensure cleanup
    };
  }, []);

  return (
    <Box
      className="jumpscareBox"
      sx={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={JumpscareGIF}
        alt="Jumpscare"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
        }}
      />
    </Box>
  );
};

export default Jumpscare;
