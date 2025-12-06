import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#121212", // fundo da página
      paper: "#1e1e1e", // cards, forms, containers
    },

    primary: {
      main: "#90caf9", // azul suave no modo dark
    },

    secondary: {
      main: "#f48fb1",
    },

    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#2a2a2a",
          borderRadius: 8,
        },
      },
    },
  },
});
