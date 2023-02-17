import React from "react";

import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import { darkTheme, lightTheme } from "@common/theme";
import { router } from "@features/routing";
import { preferenceStore } from "@features/stores";

export const ThemedApp = () => {
  const { preferredTheme } = preferenceStore();

  const theme = preferredTheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
