import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { styled } from "@mui/system";
import reading from "../../../assets/img/8b.webp";

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

const Reading = ({ setKitchen }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  useGSAP(() => {
    gsap.from(".bang", {
      scale: 0,
      opacity: 0,
      delay: 2,
      ease: "power4.out",
    });

    gsap.to(".eight-container", {
      scrollTrigger: {
        trigger: ".eight-container",
        start: "top top",
        end: "top -110%",
        scrub: true,
        onLeave: () => {
          setOpen(true);
        },
      },
    });

    gsap.fromTo(
      imgRef.current,
      {
        scale: 1,
        opacity: 0,
      },
      {
        scale: 1.3,
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
      className="eight-container"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        padding: "2rem",
      }}
    >
      {/* Text Section */}

      {/* Image Section */}
      <Box
        className="eight-img"
        sx={{
          width: "40%",
          height: "70vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
          boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.5)",
        }}
      >
        <img
          src={reading}
          alt="Eerie Scene"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "40%",
          height: "0vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
          color: "white",
          paddingRight: "2rem",
        }}
      >
        <Typography
          variant="h4"
          className="jolly-lodger-regular"
          style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
          sx={{
            color: "white",
            fontSize: "7rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "2px 2px 5px rgba(255, 0, 0, 0.7)",
          }}
        >
          <span style={{ color: "red" }}> They spot a note </span>on the fridge,
          <span style={{ color: "red" }}> its faded ink</span> barely legible.
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
          <Title id="modal-modal-title">How you wanna proceed?</Title>
          <Description id="modal-modal-description">
            The choice is yours, but beware—the darkness is watching.
          </Description>

          <ButtonsContainer>
            <ButtonStyle
              onClick={() => {
                setKitchen("exit");
                handleClose();
              }}
            >
              Go Back
            </ButtonStyle>
            <ButtonWindow
              onClick={() => {
                setKitchen("help");
                handleClose();
              }}
            >
              Help
            </ButtonWindow>
          </ButtonsContainer>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Reading;
