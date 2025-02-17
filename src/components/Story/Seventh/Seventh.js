import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";

const Seventh = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 1.5 },
      { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        textAlign: "center",
      }}
    >
      <Typography
        ref={textRef}
        variant="h1"
        className="jolly-lodger-regular"
        fontFamily={"Jolly Lodger, serif"}
        sx={{
          fontSize: "8vw",
          fontWeight: "bold",
          textTransform: "uppercase",
          textShadow: "5px 5px 10px rgba(255, 0, 0, 0.8)",
          color: "white",
        }}
      >
        The light flickered off...{" "}
        <span style={{ color: "red" }}>darkness.</span> Then—a{" "}
        <span style={{ color: "red" }}>noise from upstairs.</span>
      </Typography>
    </Box>
  );
};

export default Seventh;
