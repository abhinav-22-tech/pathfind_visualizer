// main dfs function
export function dfs(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  const stack = [];
  stack.push(startNode);
  while (stack.length) {
    const closestNode = stack.pop();
    if (closestNode === finishNode) return visitedNodesInOrder;
    if (
      !closestNode.isWall &&
      (closestNode.isStart || !closestNode.isVisited)
    ) {
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      const {col, row} = closestNode;
      let nextNode;
      if(row > 0){
        nextNode = grid[row - 1][col];
        if(!nextNode.isVisited){
          nextNode.previousNode = closestNode;
          stack.push(nextNode);
        }
      }
      if(row < grid.length - 1){
        nextNode = grid[row + 1][col];
        if(!nextNode.isVisited){
          nextNode.previousNode = closestNode;
          stack.push(nextNode);
        }
      }
      if(col > 0){
        nextNode = grid[row][col - 1];
        if(!nextNode.isVisited){
          nextNode.previousNode = closestNode;
          stack.push(nextNode);
        }
      }
      if(col < grid[0].length - 1){
        nextNode = grid[row][col + 1];
        if(!nextNode.isVisited){
          nextNode.previousNode = closestNode;
          stack.push(nextNode);
        }
      }
    }
  }
}
