import React from "react";

import { Box, Typography, useTheme } from "@mui/material";

import { ErrorIcon } from "@common/assets";
import { CircularProgress } from "@components/progress";

export type LoaderProps = { error: boolean };

export const Loader: React.FC<LoaderProps> = ({ error }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {error ? <ErrorIcon /> : <CircularProgress />}
      <Typography fontSize={theme.spacing(9)} fontWeight={700} sx={{ color: "text.primary", mt: theme.spacing(15) }}>
        {error ? "Uh-oh! Something went wrong." : "Hang in there!"}
      </Typography>
      <Typography fontSize={theme.spacing(6)} fontWeight={600} sx={{ color: "text.disabled", mt: theme.spacing(6) }}>
        {error ? "Sorry about that. Please try again in a few minutes." : "This will take just a few seconds..."}
      </Typography>
    </Box>
  );
};
