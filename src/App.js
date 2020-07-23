import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import ShareTask from "./pages/shareTask";
import LogBlogger from "./pages/logBlogger";
import SelectBlogger from "./pages/selectBlogger";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    textDecoration: "none",
    margin: "10px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Button
            variant="contained"
            component={RouterLink}
            to="/log-blogger"
            className={classes.button}
          >
            Log Blogger
          </Button>
          <Button
            variant="contained"
            component={RouterLink}
            to="/share-task"
            className={classes.button}
          >
            Share Task
          </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/log-blogger" component={LogBlogger} />
        <Route path="/share-task" component={ShareTask} />
        <Route path={"/select-blogger"} component={SelectBlogger} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
