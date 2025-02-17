import { Box, Modal, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "../../App.css";
import Line from "./Line";
import { gsap } from "gsap";
import video from "../../assets/video/main.mp4";
import audio from "../../assets/audio/main.mp3";
import Button from "./Button";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "7rem",
  bgcolor: "black",
  color: "white",
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: 4,
  cursor: "pointer",
};

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(new Audio(audio));
  const overlayRef = useRef(null);
  const buttonRef = useRef(null); // Button reference

  useEffect(() => {
    setOpen(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .catch((err) => console.log("Video autoplay blocked:", err));
    }
  }, []);
  const handleModalClose = () => {
    const tl = gsap.timeline();
    tl.to(".modal", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        setOpen(false);
        videoRef.current?.play();
        audioRef.current.play();
        audioRef.current.loop = true;
      },
    }).from(".line", {
      opacity: 0,
      ease: "power2.out",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        overlayRef.current.style.display = "none";
      },
    });

    // Fade in the button smoothly after modal disappears
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1 }
    );
  };

  const handleClick = () => {
    videoRef.current?.pause();
    audioRef.current.pause();
    const tl = gsap.timeline();
    tl.to(".main", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }).to(".line", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  };

  return (
    <Box
      className="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={video}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: open ? 0 : 1,
          transition: "opacity 1s ease-in-out",
          zIndex: -1,
        }}
        autoPlay
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      />

      {/* Black Overlay */}
      <Box
        ref={overlayRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 1,
          transition: "opacity 1s ease-in-out",
          zIndex: 1,
        }}
      />

      {/* Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={(props) => (
          <Box
            {...props}
            sx={{
              backdropFilter: "blur(10px)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        )}
      >
        <Box className="modal" onClick={handleModalClose} sx={modalStyle}>
          <Typography
            className="jolly-lodger-regular"
            style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
            whiteSpace={"nowrap"}
            id="modal-modal-title"
            variant="h2"
            color="red"
            padding={2}
          >
            Click Anywhere!
          </Typography>
        </Box>
      </Modal>

      {/* Line Component */}
      <Box className="line">
        <Line />
      </Box>

      {/* Horror Button */}
      <Box ref={buttonRef} sx={{ opacity: 0, marginTop: "2rem" }}>
        <Button handleClick={handleClick} />
      </Box>
    </Box>
  );
};

export default LandingPage;
