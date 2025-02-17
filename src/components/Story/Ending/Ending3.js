import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Ending3 = () => {
  const textRef = useRef(null);

  return (
    <Box
      clasName="ending"
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      <Typography
        ref={textRef}
        variant="h2"
        sx={{
          fontSize: "4rem",
          textAlign: "center",
          color: "white", // Default color is white
          fontFamily: "'Jolly Lodger', sans-serif",
          lineHeight: "1.5",
        }}
      >
        As they stepped out, the mansion’s lights flickered on one last time,
        revealing a <span style={{ color: "red" }}>shadow</span> in the window,
        <span style={{ color: "red" }}>watching</span> them leave.
      </Typography>
    </Box>
  );
};

export default Ending3;
