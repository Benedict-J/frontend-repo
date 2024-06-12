"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2dada1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          color: "white",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: "0px 0px",
        },
      },
    },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       input: {
    //         paddingBlock: "8px",
    //       },
    //     },
    //   },
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          input: {
            paddingBlock: "8px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontWeight: 600,
          marginBottom: "1rem",
        },
      },
    },
  },
});

export default function GlobalThemeOverride({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
