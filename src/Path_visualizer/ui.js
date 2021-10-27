// import { Icon } from "@material-ui/core";
import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { styled } from "@material-ui/core";

import logo from "../images/logo.svg";

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
    minWidth: 200,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "5px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

class Navbar extends Component {
  state = {
    algorithm: "Algorithm",
    maze: "Maze",
    speed: "Speed",
    anchorEl: null,
    anchorE2: null,
    anchorE3: null,
    open: undefined,
    open2: undefined,
    open3: undefined,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget }, () => {
      this.setState({ open: Boolean(this.state.anchorEl) });
    });
  };
  handleClick2 = (event) => {
    this.setState({ anchorE2: event.currentTarget }, () => {
      this.setState({ open2: Boolean(this.state.anchorE2) });
    });
  };
  handleClick3 = (event) => {
    this.setState({ anchorE3: event.currentTarget }, () => {
      this.setState({ open3: Boolean(this.state.anchorE3) });
    });
  };

  handleClose = (e) => {
    this.setState({ open: undefined }, () => {
      this.setState({ anchorEl: null });
    });
    this.setState({ algorithm: e.target.innerText });
  };
  handleClose2 = (e) => {
    this.setState({ open2: undefined }, () => {
      this.setState({ anchorE2: null });
    });
    this.setState({ maze: e.target.innerText });
  };
  handleClose3 = (e) => {
    this.setState({ open3: undefined }, () => {
      this.setState({ anchorE3: null });
    });
    this.setState({ speed: e.target.innerText });
  };

  render() {
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
              aria-expanded={this.state.open ? "true" : undefined}
              variant="contained"
              onClick={this.handleClick}
              style={{
                backgroundColor: "white",
                color: "#050A30",
                fontSize: "16px",
                textTransform: "none",
              }}
              endIcon={<KeyboardArrowDown />}
            >
              {this.state.algorithm}
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={this.state.anchorEl}
              open={this.state.open}
            >
              <MenuItem
                onClick={this.handleClose}
                key="Dijkstra"
                value="Dijkstra"
              >
                Dijkstra
              </MenuItem>
              <MenuItem
                onClick={this.handleClose}
                value="Breadth First Search"
                key="Breadth First Search"
              >
                Breadth First Search
              </MenuItem>

              <MenuItem
                onClick={this.handleClose}
                value="Depth First Search"
                key="Depth First Search"
              >
                Depth First Search
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem onClick={this.handleClose} value="A *" key="A *">
                A *
              </MenuItem>
              <MenuItem
                onClick={this.handleClose}
                value="Greedy Best First Search"
                key="Greedy Best First Search"
              >
                Greedy Best First Search
              </MenuItem>
              <MenuItem
                onClick={this.handleClose}
                value="Random Walk"
                key="Random Walk"
              >
                Random Walk
              </MenuItem>
            </StyledMenu>

            <Button
              sx={{ ml: 2 }}
              id="demo-customized-button-2"
              aria-controls="demo-customized-menu-2"
              aria-haspopup="true"
              aria-expanded={this.state.open2 ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={this.handleClick2}
              style={{
                backgroundColor: "blue",
                color: "white",
                textTransform: "none",
              }}
              endIcon={<KeyboardArrowDown />}
            >
              {this.state.maze}
            </Button>
            <StyledMenu
              id="demo-customized-menu-2"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button-2",
              }}
              anchorEl={this.state.anchorE2}
              open={this.state.open2}
            >
              <MenuItem onClick={this.handleClose2}>Random Maze</MenuItem>
              <MenuItem onClick={this.handleClose2}>
                Recursive Division Maze
              </MenuItem>

              <MenuItem onClick={this.handleClose2}>
                Vertical Division Maze
              </MenuItem>
              <MenuItem onClick={this.handleClose2}>
                Horizontal Division Maze
              </MenuItem>
            </StyledMenu>

            <Button
              sx={{ ml: 2 }}
              id="demo-customized-button-3"
              aria-controls="demo-customized-menu-3"
              aria-haspopup="true"
              aria-expanded={this.state.open3 ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={this.handleClick3}
              style={{
                backgroundColor: "orange",
                color: "white",
                textTransform: "none",
              }}
              endIcon={<KeyboardArrowDown />}
            >
              {this.state.speed}
            </Button>
            <StyledMenu
              id="demo-customized-menu-3"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button-3",
              }}
              anchorEl={this.state.anchorE3}
              open={this.state.open3}
            >
              <MenuItem onClick={this.handleClose3}>Slow</MenuItem>
              <MenuItem onClick={this.handleClose3}>Medium</MenuItem>
              <MenuItem onClick={this.handleClose3}>Fast</MenuItem>
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
              onClick={this.props.visualize("dijkstra")}
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
}

export default Navbar;
