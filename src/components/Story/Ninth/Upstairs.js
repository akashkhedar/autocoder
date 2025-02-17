import { Box } from "@mui/system";
import React from "react";
import Ninth from "./Ninth";
import Tenth from "../Tenth/Tenth";
import Eleventh from "../Eleventh/Eleventh";
import Jumpscare from "../Jumpscare/Jumpscare";

const Upstairs = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "black",
      }}
    >
      <Ninth />
      <Tenth />
      <Eleventh />
      <Jumpscare />
    </Box>
  );
};

export default Upstairs;
