import React, { useState } from "react";
import { Box, Typography, Modal, Button } from "@mui/material";
import eight from "../../../assets/img/7.webp";
import { styled } from "@mui/system";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

const Eight = ({ setEntry }) => {
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".eight-img", {
      scrollTrigger: {
        trigger: ".eight-container", // Target the parent container
        start: "top top", // When the top of the container hits the top of the viewport
        end: "top top", // Keep it consistent until the container moves out of view
        scrub: true,
        onEnter: () => setOpen(true), // Open the modal when the container hits the top
      },
    });
  });

  const handleClose = () => setOpen(false);

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
          <span style={{ color: "red" }}> Hesitating, </span>they wondered—
          <span style={{ color: "red" }}> back or go up?</span>.
        </Typography>
      </Box>

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
          src={eight}
          alt="Eerie Scene"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
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
                setEntry("exit");
                handleClose();
              }}
            >
              Go Back
            </ButtonStyle>
            <ButtonWindow
              onClick={() => {
                setEntry("up");
                handleClose();
              }}
            >
              Go Up
            </ButtonWindow>
          </ButtonsContainer>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Eight;
