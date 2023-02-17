import React from "react";

import { FormLogo } from "@assets/index";
import { Box, Typography, useTheme } from "@mui/material";

import { SideNavBar } from "@features/routing/components/side-nav-bar";

export const NotFound = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          [theme.breakpoints.down(1000)]: {
            display: "none",
          },
        }}>
        <Box
          sx={{
            position: "fixed",
            maxHeight: "100%",
            height: "100%",
            width: theme.spacing(22),
            pt: theme.spacing(9),
            borderRight: "2px solid",
            borderRightColor: "grey.400",
            boxShadow: 1,
            zIndex: 100,
            paddingX: theme.spacing(2),
          }}>
          <Box sx={{ textAlign: "center" }}>
            <img src={FormLogo} alt={"logo"} height={"40px"} width={"90px"} />
          </Box>
          <Box sx={{ height: "100%" }}>
            <SideNavBar />
          </Box>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: theme.spacing(150),
              marginX: "auto",
              marginY: "auto",
              textAlign: "center",
            }}>
            <Typography fontSize={theme.spacing(25)} fontWeight={700} sx={{ color: "text.disabled" }}>
              404
            </Typography>
            <Typography
              fontSize={theme.spacing(9)}
              fontWeight={700}
              sx={{ color: "text.primary", mt: theme.spacing(2) }}>
              Page not found.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
