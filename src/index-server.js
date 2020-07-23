import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./App";
import { ThemeProvider, ServerStyleSheets } from "@material-ui/core/styles";
import theme from "./css/theme";
import { StaticRouter } from "react-router";

const sheets = new ServerStyleSheets();

export default (state, url) => {
  const context = {};
  const store = configureStore(state);
  const content = renderToString(
    sheets.collect(
      <StaticRouter location={url} context={context}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </StaticRouter>
    )
  );
  const css = sheets.toString();
  const initialState = store.getState();
  return { content, initialState, css };
};
