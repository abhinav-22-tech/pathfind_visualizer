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
import "./Path_visualizer.css";
import { CssBaseline } from "@material-ui/core";
// import UI from "./ui";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default class Path_visualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
    };
  }
  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
    // console.log("Mouse Down");
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
    // console.log("Mouse Enter");
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
    // console.log("Mouse Up");
  }

  animateAlgo(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 25 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 25 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 25 * i);
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
        }, i * 25);
        continue;
      }
      setTimeout(() => {
        //visited node
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, i * 25);
    }
  };

  visualize(algo) {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    let visitedNodesInOrder = "";

    if (algo === dijkstra)
      visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    else if (algo === breadthFirstSearch)
      visitedNodesInOrder = breadthFirstSearch(grid, startNode, finishNode);
    else if (algo === dfs)
      visitedNodesInOrder = dfs(grid, startNode, finishNode);
    else if (algo === astar)
      visitedNodesInOrder = astar(grid, startNode, finishNode);
    else if (algo === greedyBFS)
      visitedNodesInOrder = greedyBFS(grid, startNode, finishNode);
    else if (algo === randomWalk)
      visitedNodesInOrder = randomWalk(grid, startNode, finishNode);

    if (algo === randomWalk) {
      this.animateRandomWalk(visitedNodesInOrder);
    } else {
      const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
      this.animateAlgo(visitedNodesInOrder, nodesInShortestPathOrder);
    }
  }

  render() {
    const { grid, mouseIsPressed } = this.state;

    return (
      <>
        <CssBaseline />
        {/* <UI /> */}
        <button onClick={() => this.visualize(dijkstra)}>Dijkstra</button>
        <button onClick={() => this.visualize(breadthFirstSearch)}>
          Breadth First Search
        </button>
        <button onClick={() => this.visualize(dfs)}>Depth First Search</button>
        <button onClick={() => this.visualize(astar)}>A *</button>
        <button onClick={() => this.visualize(greedyBFS)}>
          Greedy Best First Search
        </button>
        <button onClick={() => this.visualize(randomWalk)}>Random Walk</button>
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

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 22; row++) {
    const currentRow = [];
    for (let col = 0; col < 60; col++) {
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
