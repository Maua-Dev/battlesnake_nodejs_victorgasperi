// 0 -> pode ir
// 1 -> nao pode ir
// 2 -> visitado

import { dfs } from "./dfs";
import { coordinate, possible_moves } from "./info_interfaces";
import { possibleMovements } from "./possible_movements";

export function findBestDirections(
  my_head: coordinate,
  grid: number[][]
): string[] {
  let bestDirections: string[] = [];
  let futureMoves: possible_moves = possibleMovements(my_head);
  const canVisit = 0;
  const markVisited = 2;
  let maxMoves = -1;

  for (const [dir, futureCoordinate] of Object.entries(futureMoves)) {
    if (
      futureCoordinate.x >= 0 &&
      futureCoordinate.x < grid.length &&
      futureCoordinate.y >= 0 &&
      futureCoordinate.y < grid[0].length &&
      grid[grid.length - 1 - futureCoordinate.y][futureCoordinate.x] === canVisit
    ) {
      const newGrid: number[][] = grid.map((row) => row.slice());
      let moves: number = dfs(
        newGrid,
        grid.length - 1 - futureCoordinate.y,
        futureCoordinate.x,
        canVisit,
        markVisited
      );

      if (moves > 1 && moves > maxMoves) {
        maxMoves = moves;
        bestDirections.unshift(dir);
      } else if (moves > 1) {
        bestDirections.push(dir);
      }
    }
  }

  return bestDirections;
}
