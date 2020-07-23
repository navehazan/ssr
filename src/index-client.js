import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./css/theme";
import { BrowserRouter as Router } from "react-router-dom";

const state = window.__STATE__;
delete window.__STATE__;

const store = configureStore(state);

ReactDOM.hydrate(
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Router>,

  document.getElementById("root")
);
