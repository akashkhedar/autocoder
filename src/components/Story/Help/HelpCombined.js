import { Box } from "@mui/system";
import React, { useState } from "react";
import Help from "./Help";
import Ghost from "../Ghost/Ghost";
import Ghost2 from "../Ghost/Ghost2";
import Table from "../Table/Table";
import Ending from "../Ending/Ending";
import Ending2 from "../Ending/Ending2";
import Ending3 from "../Ending/Ending3";

const HelpCombined = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "black",
      }}
    >
      <Help />
      <Ghost />
      <Ghost2 />
      <Table />
      <Ending />
      <Ending2 />
      <Ending3 />
    </Box>
  );
};

export default HelpCombined;
