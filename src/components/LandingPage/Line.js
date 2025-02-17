import { Box, Typography } from "@mui/material";
import React from "react";

const Line = () => {
  return (
    <Box
      className="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        gap: 2,
      }}
    >
      <Typography
        className="jolly-lodger-regular"
        style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
        color="red"
        whiteSpace={"nowrap"}
        fontSize={70}
      >
        A
      </Typography>
      <Typography
        className="jolly-lodger-regular"
        color="white"
        style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
        whiteSpace={"nowrap"}
        fontSize={70}
      >
        chilling tale awaits
      </Typography>
      <Typography
        className="jolly-lodger-regular"
        style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
        color="red"
        whiteSpace={"nowrap"}
        fontSize={70}
      >
        ...
      </Typography>
      <Typography
        className="jolly-lodger-regular"
        style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
        color="white"
        whiteSpace={"nowrap"}
        fontSize={70}
      >
        but only if you’re
      </Typography>
      <Typography
        className="jolly-lodger-regular"
        style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
        color="red"
        whiteSpace={"nowrap"}
        fontSize={70}
      >
        brave enough
      </Typography>
      <Typography
        className="jolly-lodger-regular"
        style={{ fontFamily: "'Jolly Lodger', sans-serif" }}
        color="white"
        whiteSpace={"nowrap"}
        fontSize={70}
      >
        to begin
      </Typography>
    </Box>
  );
};

export default Line;
