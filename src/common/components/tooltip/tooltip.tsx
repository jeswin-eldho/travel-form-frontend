import React from "react";

import { Tooltip as LibTooltip, TooltipProps as LibTooltipProps, Typography, useTheme } from "@mui/material";

export type TooltipProps = Partial<LibTooltipProps> & { tooltipText: string };

export const Tooltip: React.FC<TooltipProps> = ({ tooltipText, placement, children, ...rest }) => {
  const theme = useTheme();

  return (
    <LibTooltip
      {...rest}
      title={
        <Typography fontSize={theme.spacing(3)} fontWeight={500} sx={{ color: "common.white" }}>
          {tooltipText}
        </Typography>
      }
      placement={placement}
      slotProps={{
        tooltip: {
          sx: {
            backgroundColor: "grey.1100",
            boxShadow: 2,
            borderRadius: theme.spacing(2),
            px: theme.spacing(5),
            py: theme.spacing(3),
            left: "-12px",
            position: "relative",
            ...rest.slotProps?.tooltip?.sx,
          },
        },
      }}>
      {children ? children : <></>}
    </LibTooltip>
  );
};
