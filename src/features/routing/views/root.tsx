import React, { useEffect } from "react";

import { FormLogo } from "@assets/index";
import { Box, useTheme } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

import { SideNavBar } from "@features/routing/components/side-nav-bar";

export const Root: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/form");
    }
  }, [navigate]);

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
        <>
          <Box
            sx={{
              position: "fixed",
              maxHeight: "100%",
              height: "100%",
              width: theme.spacing(22),
              pt: theme.spacing(9),
              borderRight: "1px solid",
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
          <Box sx={{ flex: 1, width: "100%", height: "100%", ml: theme.spacing(26) }}>
            <Outlet />
          </Box>
        </>
      </Box>
    </>
  );
};
