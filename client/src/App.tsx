import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";

import Header from "./components/ui/Header";
import HeroSection from "./components/ui/Hero-section";
import TopHeader from "./components/ui/Top-Header";
import { appTheme } from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <TopHeader />
      <Header />
      <HeroSection />
    </ThemeProvider>
  );
}

export default App;
