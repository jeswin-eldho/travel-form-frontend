import React from "react";

import { Box, CircularProgress as LibCircularProgress, circularProgressClasses } from "@mui/material";

export type CircularProgressProps = {
  progressType?: "primary" | "secondary" | "light";
  size?: number;
  thickness?: number;
};

export const CircularProgress: React.FC<CircularProgressProps> = ({
  progressType = "primary",
  size = 80,
  thickness = 4,
}) => {
  return (
    <Box sx={{ position: "relative", height: size }}>
      <LibCircularProgress
        variant="determinate"
        sx={{
          color: progressType === "primary" ? "grey.50" : progressType === "secondary" ? "grey.100" : "error.main",
        }}
        size={size}
        thickness={thickness}
        value={100}
      />
      <LibCircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color:
            progressType === "primary" ? "primary.main" : progressType === "secondary" ? "grey.800" : "common.white",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={size}
        thickness={thickness}
      />
    </Box>
  );
};
