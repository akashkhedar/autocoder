import { Box } from "@mui/system";
import React, { useState } from "react";
import Fifth from "./Fifth";
import Fourth from "./Fourth";
import Sixth from "../Sixth/Sixth";
import Seventh from "../Seventh/Seventh";
import Eight from "../Eight/Eight";
import Ninth from "../Ninth/Ninth";
import Escape from "../Escape";
import Upstairs from "../Ninth/Upstairs";

const Combined = () => {
  const [entry, setEntry] = useState("");
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "black",
      }}
    >
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eight setEntry={setEntry} />
      {entry === "exit" ? <Escape /> : <Upstairs />}
    </Box>
  );
};

export default Combined;
