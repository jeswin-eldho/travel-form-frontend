import React from "react";

import { Box, Snackbar as LibSnackbar, SnackbarProps as LibSnackbarProps, Typography, useTheme } from "@mui/material";

import { SuccessIcon, WarningIcon } from "@common/assets";

export type SnackbarProps = LibSnackbarProps & { snackBarType: "error" | "success"; snackbarText: string };

export const Snackbar: React.FC<SnackbarProps> = ({ snackBarType, snackbarText, children, ...rest }) => {
  const theme = useTheme();

  return (
    <LibSnackbar
      {...rest}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center", ...rest.anchorOrigin }}
      sx={{ zIndex: 10000, top: 0, ...rest.sx }}>
      <Box
        sx={{
          backgroundColor: "background.default",
          width: "100%",
          borderRadius: theme.spacing(2),
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: theme.spacing(4),
          border: 1,
          borderColor: "grey.300",
          boxShadow: 3,
        }}>
        {snackBarType === "error" ? <WarningIcon /> : <SuccessIcon />}
        <Typography fontSize={theme.spacing(4)} fontWeight={700} sx={{ color: "text.secondary", ml: theme.spacing(3) }}>
          {snackbarText}
        </Typography>
      </Box>
    </LibSnackbar>
  );
};
