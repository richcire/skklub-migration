"use client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import getDesignTokens from "@/utils/getDesignTokens";

const Providers = ({ children }) => {
  const darkModeTheme = createTheme(getDesignTokens("dark"));
  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
