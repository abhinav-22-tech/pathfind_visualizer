// import { Icon } from "@material-ui/core";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Dropdown,
  DropdownItem,
} from "@material-ui/core";
import { CallMissedSharp, Height, Menu } from "@material-ui/icons";
import logo from "../images/logo.png";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#050A30",
  },
  logo: {
    width: "10rem",
    height: "auto",
  },
  formControl: {
    minWidth: 100,
    color: "white",
  },
});

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  return (
    <div>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <IconButton edge="start" aria-label="app" color="inherit">
            <img src={logo} alt="logo" className={classes.logo} />

            <FormControl className={classes.formControl}>
              <InputLabel>Algorithm</InputLabel>
              <Select onChange={(e) => setValue(e.target.value)}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={11}>Tens</MenuItem>
                <MenuItem value={12}>Tens</MenuItem>
                <MenuItem value={13}>Tens</MenuItem>
              </Select>
            </FormControl>

            <p>You Selected: {value}</p>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
