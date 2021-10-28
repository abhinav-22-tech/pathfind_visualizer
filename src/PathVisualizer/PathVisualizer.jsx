import React, { Component } from "react";
import Node from "./Node/Node";

import {
  breadthFirstSearch,
  getNodesInShortestPathOrder,
} from "../Algorithms/breadthFirstSearch";
import { dijkstra } from "../Algorithms/dijkstra";
import { dfs } from "../Algorithms/dfs";
import { astar } from "../Algorithms/astar";
import { greedyBFS } from "../Algorithms/greedyBestFirstSearch";
import { randomWalk } from "../Algorithms/randomWalk";

import { randomMaze } from "../maze/randomMaze";
import { recursiveDivisionMaze } from "../maze/recursiveDivision";
import { verticalMaze } from "../maze/verticalMaze";
import { horizontalMaze } from "../maze/horizontalMaze";

import "./PathVisualizer.css";
import { CssBaseline } from "@material-ui/core";
import Navbar from "./ui";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;
let visitedNodesInOrder;

export default class PathVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      visualizingAlgorithm: false,
      generatingMaze: false,
      numRows: 24,
      numColumns: 60,
      speed: 10,
      mazeSpeed: 10,
    };
  }
  componentDidMount() {
    const grid = getInitialGrid(this.state.numRows, this.state.numColumns);
    this.setState({ grid });
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  animateAlgo(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, this.state.speed * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, this.state.speed * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, this.state.speed * i);
    }
  }

  animateRandomWalk = (visitedNodesInOrder) => {
    for (let i = 1; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.setState({ visualizingAlgorithm: false });
        }, i * this.state.speed);
        return;
      }
      let node = visitedNodesInOrder[i];
      if (i === visitedNodesInOrder.length - 1) {
        setTimeout(() => {
          //finish node
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-finish-reached";
        }, i * this.state.speed);
        continue;
      }
      setTimeout(() => {
        //visited node
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, i * this.state.speed);
    }
  };

  visualize(algo) {
    if (this.state.visualizingAlgorithm || this.state.generatingMaze) {
      return;
    }
    if (algo === "Algorithm") return;

    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    visitedNodesInOrder = "";

    if (algo === "Dijkstra")
      visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    else if (algo === "Breadth First Search")
      visitedNodesInOrder = breadthFirstSearch(grid, startNode, finishNode);
    else if (algo === "Depth First Search")
      visitedNodesInOrder = dfs(grid, startNode, finishNode);
    else if (algo === "A *")
      visitedNodesInOrder = astar(grid, startNode, finishNode);
    else if (algo === "Greedy Best First Search")
      visitedNodesInOrder = greedyBFS(grid, startNode, finishNode);
    else if (algo === "Random Walk")
      visitedNodesInOrder = randomWalk(grid, startNode, finishNode);

    if (algo === "Random Walk") {
      this.animateRandomWalk(visitedNodesInOrder);
    } else {
      const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
      this.animateAlgo(visitedNodesInOrder, nodesInShortestPathOrder);
    }
  }

  animateMaze = (walls) => {
    for (let i = 0; i <= walls.length; i++) {
      if (i === walls.length) {
        setTimeout(() => {
          this.clearGrid();
          let newGrid = getNewGridWithMaze(this.state.grid, walls);
          this.setState({ grid: newGrid, generatingMaze: false });
        }, i * this.state.mazeSpeed);
        return;
      }
      let wall = walls[i];
      let node = this.state.grid[wall[0]][wall[1]];
      setTimeout(() => {
        //Walls
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-wall-animated";
      }, i * this.state.mazeSpeed);
    }
  };

  generateRandomMaze() {
    if (this.state.visualizingAlgorithm || this.state.generatingMaze) {
      return;
    }
    this.setState({ generatingMaze: true });
    setTimeout(() => {
      const { grid } = this.state;
      const startNode = grid[START_NODE_ROW][START_NODE_COL];
      const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      const walls = randomMaze(grid, startNode, finishNode);
      this.animateMaze(walls);
    }, this.state.mazeSpeed);
  }

  generateRecursiveDivisionMaze() {
    if (this.state.visualizingAlgorithm || this.state.generatingMaze) {
      return;
    }
    this.setState({ generatingMaze: true });
    setTimeout(() => {
      const { grid } = this.state;
      const startNode = grid[START_NODE_ROW][START_NODE_COL];
      const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      const walls = recursiveDivisionMaze(grid, startNode, finishNode);
      this.animateMaze(walls);
    }, this.state.mazeSpeed);
  }

  generateVerticalMaze() {
    if (this.state.visualizingAlgorithm || this.state.generatingMaze) {
      return;
    }
    this.setState({ generatingMaze: true });
    setTimeout(() => {
      const { grid } = this.state;
      const startNode = grid[START_NODE_ROW][START_NODE_COL];
      const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      const walls = verticalMaze(grid, startNode, finishNode);
      this.animateMaze(walls);
    }, this.state.mazeSpeed);
  }

  generateHorizontalMaze() {
    if (this.state.visualizingAlgorithm || this.state.generatingMaze) {
      return;
    }
    this.setState({ generatingMaze: true });
    setTimeout(() => {
      const { grid } = this.state;
      const startNode = grid[START_NODE_ROW][START_NODE_COL];
      const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      const walls = horizontalMaze(grid, startNode, finishNode);
      this.animateMaze(walls);
    }, this.state.mazeSpeed);
  }

  generateMaze(maze) {
    if (maze === "Random Maze") this.generateRandomMaze();
    else if (maze === "Recursive Division Maze")
      this.generateRecursiveDivisionMaze();
    else if (maze === "Vertical Division Maze") this.generateVerticalMaze();
    else if (maze === "Horizontal Division Maze") this.generateHorizontalMaze();
  }

  clearGrid() {
    if (this.state.visualizingAlgorithm || this.state.generatingMaze) {
      return;
    }

    const grid = getInitialGrid(this.state.numRows, this.state.numColumns);
    this.setState({ grid });

    this.setState({ visualizingAlgorithm: false });

    for (let i = 0; i <= visitedNodesInOrder.toString().length; i++) {
      if (visitedNodesInOrder[i] === undefined) {
        return;
      } else {
        const node = visitedNodesInOrder[i];

        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node";

        document.getElementById(
          `node-${START_NODE_ROW}-${START_NODE_COL}`
        ).className = "node node-start";

        document.getElementById(
          `node-${FINISH_NODE_ROW}-${FINISH_NODE_COL}`
        ).className = "node node-finish";
      }
    }
  }

  updateSpeed(data) {
    let value = 10;
    if (data === "Slow") {
      value = 50;
    } else if (data === "Medium") {
      value = 25;
    } else if (data === "Fast" || data === "Speed") {
      value = 10;
    }
    this.setState({ speed: value });
  }

  render() {
    const { grid, mouseIsPressed } = this.state;

    return (
      <>
        <CssBaseline />

        <Navbar
          visualize={this.visualize.bind(this)}
          generateMaze={this.generateMaze.bind(this)}
          clearGrid={this.clearGrid.bind(this)}
          updateSpeed={this.updateSpeed.bind(this)}
        />
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx} className="rowid">
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      row={row}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const getInitialGrid = (numRows, numColumns) => {
  const grid = [];
  for (let row = 0; row < numRows; row++) {
    const currentRow = [];
    for (let col = 0; col < numColumns; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

// const getNewGridWithWalls = (grid, row, col) => {
//   let newGrid = grid.slice();
//   let node = grid[row][col];
//   let newNode = {
//     ...node,
//     isWall: !node.isWall,
//   };
//   newGrid[row][col] = newNode;
//   return newGrid;
// };

const getNewGridWithMaze = (grid, walls) => {
  let newGrid = grid.slice();
  for (let wall of walls) {
    let node = grid[wall[0]][wall[1]];
    let newNode = {
      ...node,
      isWall: true,
    };
    newGrid[wall[0]][wall[1]] = newNode;
  }
  return newGrid;
};
