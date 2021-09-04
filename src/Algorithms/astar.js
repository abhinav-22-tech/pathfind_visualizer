// Need Heuristic
export function astar(grid, startNode, finishNode){
  //Working on it
}



// Find Shortest Path After the Dijkstra Function run using backtracking 
export function getNodesInShortestPathOrder(finishNode){
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while(currentNode !== null){
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
