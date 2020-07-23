export default (initialState, content, css) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title> ssr example </title>
      <style id="jss-server-side">${css}</style>
      <link rel="stylesheet" href="assets/style.css">
    </head>
    <body>
      <div class="content">
         <div id="root" class="wrap-inner">${content}</div>
      </div>
   <script>
      window.__STATE__ = ${JSON.stringify(initialState)}
   </script>
   <script src="assets/client.js"></script>
    </body>`;
};
