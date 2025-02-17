import { Box } from "@mui/material";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import audio from "../../../assets/audio/jumpscare.mp3";
import JumpscareGIF from "../../../assets/img/jumpscare.gif";

gsap.registerPlugin(ScrollTrigger);

const Jumpscare = () => {
  const audioRef = useRef(new Audio(audio)); // Reference to the audio element

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current?.paused) {
        audioRef.current.play().catch((err) => {
          console.error("Error playing audio:", err);
        });
      }
    };

    const pauseAudio = () => {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset audio to the start
      }
    };

    // GSAP ScrollTrigger animation setup
    const scrollTrigger = ScrollTrigger.create({
      trigger: ".jumpscareBox",
      start: "top 80%", // Trigger when the top of the box is 80% into the viewport
      end: "+=100%", // Trigger ends after scrolling the box height
      scrub: true, // Smooth scroll effect
      onEnter: playAudio, // Play audio when entering the trigger zone
      onLeave: pauseAudio, // Pause audio when leaving the trigger zone
      onEnterBack: playAudio, // Play again when scrolling back
      onLeaveBack: pauseAudio, // Pause when scrolling back
    });

    // Clean up ScrollTrigger when the component unmounts
    return () => {
      scrollTrigger.kill();
      pauseAudio(); // Stop audio if it’s playing when the component is removed
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
      <audio ref={audioRef} src={audio} loop style={{ display: "none" }} />
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
