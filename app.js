import express from "express";
import path from "path";
import getTemplate from "./src/utils/getTemplate";
import ssr from "./src/index-server";
import data from "./assets/data";
const app = express();

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

app.listen(3000);

app.get("/", (req, res) => {
  const { content, initialState, css } = ssr({ bloggers: data },req.url);
  const template = getTemplate(initialState, content, css);
  res.send(template);
});
