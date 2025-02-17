import { Box } from "@mui/system";
import React, { useState } from "react";
import HelpCombined from "../Help/HelpCombined";
import Kitchen from "../Kitchen/Kitchen";
import Note from "../Note/Note";
import OutWindow from "../OutWindow/OutWindow";
import Reading from "../Reading/Reading";
import Window from "./Window";

const CombinedWindow = () => {
  const [kitchen, setKitchen] = useState("");
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "black",
      }}
    >
      <Window />
      <Kitchen />
      <Note />
      <Reading setKitchen={setKitchen} />
      {kitchen === "exit" ? <OutWindow /> : <HelpCombined />}
    </Box>
  );
};

export default CombinedWindow;
