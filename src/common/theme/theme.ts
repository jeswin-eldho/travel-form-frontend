import { createTheme, Shadows, SxProps } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
  palette: {
    text: {
      primary: "#33353A",
      secondary: "#484848",
      disabled: "#707070",
    },
    background: {
      paper: "#FBFCFD",
      default: "rgba(255, 255, 255, 1)",
    },
    primary: {
      main: "#FF5A5F",
      dark: "#DE2E34",
      light: "#FF5A5F99",
    },
    grey: {
      "50": "#7070701A",
      "100": "#F3F3F3",
      "200": "#F5F5F5",
      "250": "#FF5A5F1A",
      "300": "#E5E5E599",
      "400": "#E5E5E5",
      "500": "#D9D9D9",
      "600": "#CFCFCF",
      "700": "#A9A9A9",
      "800": "#707070",
      "900": "#666666",
      "1000": "#566370",
      "1100": "#504D54",
      "1200": "#191919",
      "1300": "#000000CC",
      "1400": "#D2D2D2",
      "1500": "#48484899",
      "1600": "#E8EAEE",
      "1700": "#F1F1F1",
    },
    error: {
      main: "#EDC7BE",
      dark: "#C03515",
      light: "#F9EBE8",
    },
    success: {
      main: "#00A699",
      light: "#E2F3F3",
    },
    info: {
      main: "#FAEEBF",
      dark: "#EFC519",
      light: "#FDF9E8",
    },
    action: {
      hover: "#FF5A5F0D",
    },
  },
  platform: {
    background: {
      facebook: "#1876F008",
      twitter: "#1DA1F208",
      linkedin: "#F4F9FD",
      instagram: "#903AA10A",
    },
    border: {
      facebook: "#1876F0",
      twitter: "#1DA1F2",
      linkedin: "#007AB9",
      instagram: "#903AA1",
    },
  },
  shadows: [
    "none",
    "0px 2px 12px rgba(0, 0, 0, 0.04)",
    "0px 4px 4px rgba(37, 37, 37, 0.06)",
    "1px 2px 4px rgba(0, 0, 0, 0.05)",
    ...Array(23).fill("none"),
  ] as Shadows,
  spacing: 4,
  mixins: {
    textWrap: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      wordWrap: "break-word",
      wordBreak: "break-all",
    },
    cardHover: {
      "&:hover": {
        backgroundColor: "#F5F5F5",
        cursor: "pointer",
      },
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
  palette: {
    text: {
      primary: "#33353A",
      secondary: "#484848",
      disabled: "#707070",
    },
    background: {
      paper: "#FBFCFD",
      default: "rgba(255, 255, 255, 1)",
    },
    primary: {
      main: "#FF5A5F",
      dark: "#DE2E34",
      light: "#FF5A5F99",
    },
    grey: {
      "50": "#7070701A",
      "100": "#F3F3F3",
      "200": "#F5F5F5",
      "250": "#FF5A5F1A",
      "300": "#E5E5E599",
      "400": "#E5E5E5",
      "500": "#D9D9D9",
      "600": "#CFCFCF",
      "700": "#A9A9A9",
      "800": "#707070",
      "900": "#666666",
      "1000": "#566370",
      "1100": "#504D54",
      "1200": "#191919",
      "1300": "#000000CC",
      "1400": "#D2D2D2",
      "1500": "#48484899",
      "1600": "#E8EAEE",
      "1700": "#F1F1F1",
    },
    error: {
      main: "#EDC7BE",
      dark: "#C03515",
      light: "#F9EBE8",
    },
    success: {
      main: "#00A699",
      light: "#E2F3F3",
    },
    info: {
      main: "#FAEEBF",
      dark: "#EFC519",
      light: "#FDF9E8",
    },
    action: {
      hover: "#FF5A5F0D",
    },
  },
  platform: {
    background: {
      facebook: "#1876F008",
      twitter: "#1DA1F208",
      linkedin: "#F4F9FD",
      instagram: "#903AA10A",
    },
    border: {
      facebook: "#1876F0",
      twitter: "#1DA1F2",
      linkedin: "#007AB9",
      instagram: "#903AA1",
    },
  },
  shadows: [
    "none",
    "0px 2px 12px rgba(0, 0, 0, 0.04)",
    "0px 4px 4px rgba(37, 37, 37, 0.06)",
    "1px 2px 4px rgba(0, 0, 0, 0.05)",
    ...Array(23).fill("none"),
  ] as Shadows,
  spacing: 4,
  mixins: {
    textWrap: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      wordWrap: "break-word",
      wordBreak: "break-all",
    },
    cardHover: {
      "&:hover": {
        backgroundColor: "#F5F5F5",
        cursor: "pointer",
      },
    },
  },
});

declare module "@mui/material" {
  interface Color {
    "250"?: string;
    "1000"?: string;
    "1100"?: string;
    "1200"?: string;
    "1300"?: string;
    "1400"?: string;
    "1500"?: string;
    "1600"?: string;
    "1700"?: string;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    platform: {
      background: {
        facebook: string;
        twitter: string;
        linkedin: string;
        instagram: string;
      };
      border: {
        facebook: string;
        twitter: string;
        linkedin: string;
        instagram: string;
      };
    };
    mixins: Mixins;
  }
  interface ThemeOptions {
    platform: {
      background: {
        [id: string]: string;
      };
      border: {
        [id: string]: string;
      };
    };
  }
  interface Mixins {
    textWrap: SxProps<Theme>;
    cardHover: SxProps<Theme>;
  }
}

export const flex = (
  flexDirection: string = "row",
  alignItems: string = "center",
  justifyContent: string = "center",
): SxProps => {
  return {
    display: "flex",
    flexDirection: flexDirection,
    alignItems: alignItems,
    justifyContent: justifyContent,
  };
};
