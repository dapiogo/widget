import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./pages/App";
import store from "./store";
import GlobalStyle from "./theme/global-style";
import { theme } from "./theme/theme";

ReactDOM.render(
  <Provider store={store}>
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </>
  </Provider>,
  document.getElementById("root")
);
