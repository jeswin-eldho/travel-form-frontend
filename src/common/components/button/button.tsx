import React from "react";

import { Button as LibButton, ButtonProps as LibButtonProps, useTheme } from "@mui/material";

import { CircularProgress } from "@components/progress";

export type ButtonProps = LibButtonProps & {
  buttonType: "primaryContained" | "infoContained" | "text" | "outlined";
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ buttonType, disabled = false, loading = false, children, ...rest }) => {
  const theme = useTheme();

  const getVariant = () => {
    if (buttonType === "primaryContained" || buttonType === "infoContained") {
      return "contained";
    } else if (buttonType === "outlined") {
      return "outlined";
    }
    return "text";
  };

  const getProgressType = () => {
    if (buttonType === "primaryContained" || buttonType === "text") {
      return "light";
    }
    return "secondary";
  };

  return (
    <LibButton
      {...rest}
      variant={getVariant()}
      sx={[
        {
          paddingY: loading ? theme.spacing(4) : 0,
          paddingX: loading ? theme.spacing(12) : 0,
          margin: 0,
          textTransform: "none",
          boxShadow: "none",
        },
        disabled && {
          pointerEvents: "none",
          cursor: "default",
        },
        buttonType === "primaryContained" && {
          borderRadius: theme.spacing(1),
          backgroundColor: disabled ? "primary.light" : "primary.main",
          "&:hover": {
            backgroundColor: disabled ? "primary.light" : "primary.dark",
            boxShadow: "none",
          },
        },
        buttonType === "infoContained" && {
          borderRadius: theme.spacing(1),
          backgroundColor: disabled ? "grey.300" : "grey.400",
          mr: theme.spacing(3),
          "&:hover": {
            backgroundColor: disabled ? "grey.300" : "grey.600",
            boxShadow: "none",
          },
        },
        buttonType === "text" && {
          "&:hover": {
            backgroundColor: disabled ? "none" : "common.white",
            boxShadow: "none",
          },
        },
        // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
        ...(Array.isArray(rest.sx) ? rest.sx : [rest.sx]),
      ]}>
      {loading ? <CircularProgress size={16} thickness={3} progressType={getProgressType()} /> : children}
    </LibButton>
  );
};
