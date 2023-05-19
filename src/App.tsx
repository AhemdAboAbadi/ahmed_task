import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import client from "./services/apollo";
import { HomeScreen } from "./pages";

const theme = createTheme();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomeScreen />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
