import { useGSAP } from "@gsap/react";
import { Typography, Box, Modal, Button, makeStyles } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import third from "../../../assets/img/3.webp";
import { styled } from "@mui/system";

gsap.registerPlugin(ScrollTrigger);

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.7)",
  color: "#fff",
  fontFamily: "'Creepster', sans-serif",
}));

const Title = styled(Typography)({
  fontSize: "2rem",
  textAlign: "center",
  color: "#ff0000",
  marginBottom: "10px",
});

const Description = styled(Typography)({
  fontSize: "1.2rem",
  color: "#ddd",
  textAlign: "center",
  marginBottom: "20px",
});

const ButtonsContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
});

const ButtonStyle = styled(Button)({
  backgroundColor: "#e60000",
  color: "#fff",
  fontSize: "1.1rem",
  padding: "10px 20px",
  textTransform: "uppercase",
  border: "2px solid #ff0000",
  "&:hover": {
    backgroundColor: "#ff0000",
    boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.8)",
  },
});

const ButtonWindow = styled(Button)({
  backgroundColor: "#444",
  color: "#fff",
  fontSize: "1.1rem",
  padding: "10px 20px",
  textTransform: "uppercase",
  border: "2px solid #ddd",
  "&:hover": {
    backgroundColor: "#666",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Third = ({ setEntry }) => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useGSAP(() => {
    gsap.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
          markers: true,
        },
      }
    );

    gsap.from(".choice-third", {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".choice-third",
        start: "top 90%",
        end: "top 95%",
        scrub: true,
        onLeave: () => {
          setOpen(true);
        },
      },
    });
  });

  return (
    <Box sx={{ width: "100%", backgroundColor: "black" }}>
      {/* Image Section (Contained in a Box) */}

      <Box
        ref={textRef}
        sx={{
          height: "15vh",
          width: "100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="h1"
          className="jolly-lodger-regular"
          style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
          sx={{
            color: "white",
            fontSize: "2.8rem",
            maxWidth: "100%",
            whiteSpace: "normal",
            wordWrap: "break-word",
          }}
        >
          They stopped <span style={{ color: "red" }}>at the</span>, rusted
          gate, staring up <span style={{ color: "red" }}>'That's one</span>{" "}
          creepy mansion.... <span style={{ color: "red" }}>should we</span>, go
          in?
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "90vh",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0px 0px 15px rgba(255,255,255,0.2)",
          }}
        >
          <img
            ref={imgRef}
            src={third}
            alt="Mansion"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              filter: "brightness(80%)",
            }}
          />
        </Box>
      </Box>

      {/* Text Section (Smaller Height) */}

      {/* Last Text Section (Below Image) */}
      <Box
        sx={{
          height: "15vh",
          width: "100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="h1"
          className="jolly-lodger-regular choice-third"
          style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
          sx={{
            color: "white",
            fontSize: "2.8rem",
            maxWidth: "100%",
            whiteSpace: "normal",
            wordWrap: "break-word",
          }}
        >
          'Looks <span style={{ color: "red" }}>abandoned…</span> but also kinda{" "}
          <span style={{ color: "red" }}> haunted.'</span> 'So… door or window?'
        </Typography>
      </Box>

      {/* Modal for the pop-up */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <Title
            id="modal-modal-title"
            className="jolly-lodger-regular"
            style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
          >
            How you wanna enter the Mansion??
          </Title>
          <Description id="modal-modal-description">
            The door creaks behind you. The mystery awaits.
          </Description>

          <ButtonsContainer>
            <ButtonStyle
              onClick={() => {
                setEntry("Door");
                handleClose();
              }}
            >
              Break the door
            </ButtonStyle>
            <ButtonWindow
              onClick={() => {
                setEntry("Window");
                handleClose();
              }}
            >
              Silently through the window
            </ButtonWindow>
          </ButtonsContainer>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Third;
