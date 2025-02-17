import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { Box, Typography } from "@mui/material";
import typeWriter from "../../../assets/audio/Typewriter.mp3";
import Intro from "../Intro/Intro";

gsap.registerPlugin(TextPlugin);

const StoryStart = () => {
  const textRef = useRef(null);
  const audioRef = useRef(new Audio(typeWriter));

  useGSAP(() => {
    const text =
      "The night was thick with fog, the air heavy with silence—except for the faint crunch of footsteps on the empty street...";
    textRef.current.innerText = "";
    audioRef.current.play();
    gsap.to(textRef.current, {
      text: text,
      duration: 2,
      ease: "steps(22)",
      onComplete: () => {
        audioRef.current.pause();
      },
    });
  }, []);

  useEffect(() => {
    // Check if the page was refreshed and redirect to homepage
    if (window.performance.navigation.type === 1) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          placeItems: "center",
          fontFamily: "monospace",
          fontSize: "2em",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            margin: "10px 10px 10px 10px",
            borderRadius: "10px",
            color: "whitesmoke",
            height: "25rem",
            width: "70rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
            textWrap: "wrap",
          }}
        >
          <Typography
            component="span"
            className="risque-regular"
            style={{ fontFamily: "'Risque', serif" }}
            ref={textRef}
            fontSize={50}
          ></Typography>
        </Box>
      </Box>
    </>
  );
};

export default StoryStart;
