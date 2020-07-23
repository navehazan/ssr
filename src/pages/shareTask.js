import React from "react";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    padding: "20px",
  },
  button: {
    textDecoration: "none",
    margin: "10px",
  },
});

const ShareTask = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/select-blogger"
        className={classes.button}
      >
        Share Task
      </Button>
    </div>
  );
};

export default ShareTask;
