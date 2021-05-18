// main breadthfirstsearch function
export function breadthFirstSearch(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  const queue = [startNode];
  while (!!queue.length) {
    const closestNode = queue.shift();
    if (closestNode === finishNode) return visitedNodesInOrder;
    if (
      !closestNode.isWall &&
      (closestNode.isStart || !closestNode.isVisited)
    ) {
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      const { col, row } = closestNode;
      let nextNode;
      if (row > 0) {
        nextNode = grid[row - 1][col];
        if (!nextNode.isVisited) {
          nextNode.previousNode = closestNode;
          queue.push(nextNode);
        }
      }
      if (row < grid.length - 1) {
        nextNode = grid[row + 1][col];
        if (!nextNode.isVisited) {
          nextNode.previousNode = closestNode;
          queue.push(nextNode);
        }
      }
      if (col > 0) {
        nextNode = grid[row][col - 1];
        if (!nextNode.isVisited) {
          nextNode.previousNode = closestNode;
          queue.push(nextNode);
        }
      }
      if (col < grid[0].length - 1) {
        nextNode = grid[row][col + 1];
        if (!nextNode.isVisited) {
          nextNode.previousNode = closestNode;
          queue.push(nextNode);
        }
      }
    }
  }
}

export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while(currentNode !== null){
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
