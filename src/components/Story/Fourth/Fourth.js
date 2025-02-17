import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import fourth from "../../../assets/img/5a.webp";
import Fifth from "./Fifth";

const Fourth = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        scale: 1.2,
        rotation: 45,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {/* Text Section */}

        {/* Image Section */}
        <Box
          sx={{
            width: "80%",
            height: "80%",
            overflow: "hidden",
            borderRadius: "15px",
            boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.5)",
          }}
        >
          <img
            ref={imgRef}
            src={fourth}
            alt="Mansion"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box sx={{ marginY: "2rem" }}>
          <Typography
            variant="h4"
            className="jolly-lodger-regular"
            style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
            sx={{
              color: "white",
              fontSize: "2rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textShadow: "2px 2px 5px rgba(255, 0, 0, 0.7)",
            }}
          >
            They step through the rusty gate with a loud creak, the mansion
            <span style={{ color: "red" }}> looming ahead</span> in eerie
            silence.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Fourth;
