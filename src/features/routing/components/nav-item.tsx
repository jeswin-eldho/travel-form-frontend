import React from "react";

import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Tooltip } from "@components/tooltip";

export type NavItemProps = {
  renderIcon: () => JSX.Element;
  title: string;
  isFirst?: boolean;
  to: string;
};

export const NavItem: React.FC<NavItemProps> = ({ renderIcon, title, to, isFirst = false }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Tooltip tooltipText={title} placement="right">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: theme.spacing(2),
            pt: theme.spacing(4),
            pb: theme.spacing(4),
            mt: isFirst ? theme.spacing(8) : theme.spacing(2),
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "grey.100",
              borderRadius: theme.spacing(2),
            },
          }}
          onClick={() => navigate(to)}>
          <Box>{renderIcon()}</Box>
          <Typography fontSize={theme.spacing(2)} fontWeight={700} sx={{ color: "text.primary" }}>
            {title}
          </Typography>
        </Box>
      </Tooltip>
    </>
  );
};
