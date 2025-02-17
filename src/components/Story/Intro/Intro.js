import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import walk from "../../../assets/audio/walk.mp3";
import first from "../../../assets/img/1.webp";
import { Box } from "@mui/material";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const audioRef = useRef(new Audio(walk));

  useGSAP(() => {
    const playAudio = () => {
      if (audioRef.current.paused) {
        audioRef.current.play().catch((err) => {
          console.error("Error playing audio:", err);
        });
      }
    };

    const pauseAudio = () => {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };

    gsap.fromTo(
      ".image-box",
      {
        opacity: 0,
        y: 150,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".image-box",
          start: "top 80%",
          end: "+=100%",
          scrub: true,
          onEnter: playAudio,
          onLeave: pauseAudio,
          onEnterBack: playAudio,
          onLeaveBack: pauseAudio,
        },
      }
    );

    return () => {
      pauseAudio();
    };
  }, []);

  return (
    <Box>
      <Box className="image-box" sx={{ height: "100vh", background: "black" }}>
        <img
          src={first}
          alt="start"
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
            margin: "auto",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default Intro;
