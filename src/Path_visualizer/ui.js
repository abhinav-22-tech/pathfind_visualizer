// import { Icon } from "@material-ui/core";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Divider,
  CssBaseline,
  Box,
} from "@mui/material";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import MenuIcon from "@material-ui/icons/Menu";
import { styled } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

import logo from "../images/logo.svg";

const useStyles = makeStyles({
  logo: {
    width: "10rem",
    height: "auto",
  },
});

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 180,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [anchorE3, setAnchorE3] = useState(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  const open3 = Boolean(anchorE3);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };

  const [value, setValue] = useState("");

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#050A30" }}>
        <Toolbar>
          <IconButton edge="start" aria-label="app">
            <img
              src={logo}
              alt="logo"
              style={{ width: "12rem", height: "auto" }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            // sx={{ flexGrow: 1 }}
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            style={{
              backgroundColor: "white",
              color: "#050A30",
              fontSize: "16px",
              textTransform: "none",
            }}
            endIcon={<KeyboardArrowDown />}
          >
            Algorithm
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Dijkstra</MenuItem>
            <MenuItem onClick={handleClose}>Breadth First Search</MenuItem>

            <MenuItem onClick={handleClose}>Depth First Search</MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose}>A *</MenuItem>
            <MenuItem onClick={handleClose}>Greedy Best First Search</MenuItem>
            <MenuItem onClick={handleClose}>Random Walk</MenuItem>
          </StyledMenu>

          <Button
            sx={{ ml: 2 }}
            id="demo-customized-button-2"
            aria-controls="demo-customized-menu-2"
            aria-haspopup="true"
            aria-expanded={open2 ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick2}
            className={classes.btn}
            style={{ backgroundColor: "blue", color: "white" }}
            endIcon={<KeyboardArrowDown />}
          >
            Maze
          </Button>
          <StyledMenu
            id="demo-customized-menu-2"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button-2",
            }}
            anchorEl={anchorE2}
            open={open2}
            onClose={handleClose2}
          >
            <MenuItem onClick={handleClose2}>Random Maze</MenuItem>
            <MenuItem onClick={handleClose2}>Recursive Division Maze</MenuItem>

            <MenuItem onClick={handleClose2}>Vertical Division Maze</MenuItem>
            <MenuItem onClick={handleClose2}>Horizontal Division Maze</MenuItem>
          </StyledMenu>

          <Button
            sx={{ ml: 2 }}
            id="demo-customized-button-3"
            aria-controls="demo-customized-menu-3"
            aria-haspopup="true"
            aria-expanded={open3 ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick3}
            className={classes.btn}
            style={{ backgroundColor: "orange", color: "white" }}
            endIcon={<KeyboardArrowDown />}
          >
            Speed
          </Button>
          <StyledMenu
            id="demo-customized-menu-3"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button-3",
            }}
            anchorEl={anchorE3}
            open={open3}
            onClose={handleClose3}
          >
            <MenuItem onClick={handleClose3}>Slow</MenuItem>
            <MenuItem onClick={handleClose3}>Medium</MenuItem>
            <MenuItem onClick={handleClose3}>Fast</MenuItem>
          </StyledMenu>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            variant="outlined"
            sx={{ ml: 2 }}
            style={{ borderColor: "lightgreen", color: "lightgreen" }}
          >
            Visualize Algorithm
          </Button>

          <Button
            variant="contained"
            sx={{ ml: 2 }}
            style={{ backgroundColor: "green" }}
          >
            Generate Maze
          </Button>

          <Button
            variant="contained"
            sx={{ ml: 2 }}
            style={{ backgroundColor: "darkred" }}
          >
            Clear Grid
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
