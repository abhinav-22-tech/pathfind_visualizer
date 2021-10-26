import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 3,
  },
  subTitle: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#391763" }}>
        <Toolbar variant="dense">
          <Typography variant="h5" className={classes.title}>
            Path Finding
          </Typography>

          <Button
            variant="variant"
            style={{
              padding: "13px 16px",
              backgroundColor: "#069983",
              color: "#FFFFFF",
              fontSize: "15px",
            }}
            className={classes.subTitle}
          >
            Visualize!
          </Button>

          <Button
            variant="variant"
            style={{ color: "#FFFFFF" }}
            className={classes.subTitle}
          >
            Algorithm
          </Button>

          <Button
            variant="variant"
            style={{ color: "#FFFFFF" }}
            className={classes.subTitle}
          >
            Mazes & Pattern
          </Button>

          <Button
            variant="variant"
            style={{ color: "#FFFFFF" }}
            className={classes.subTitle}
          >
            Speed
          </Button>

          <Typography variant="h6" className={classes.subTitle}>
            Time Taken: 10ms
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
