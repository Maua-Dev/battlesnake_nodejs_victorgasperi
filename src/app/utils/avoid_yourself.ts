import { coordinate, possible_moves } from "./info_interfaces";
import { possibleMovements } from "./possible_movements";
import { verifyPossibleMoves } from "./verifyPossibleMoves";

export function avoidYourself(
  my_head: coordinate,
  my_body: coordinate[],
  next_move: string[]
): string[] {
  let directions_to_avoid: string[] = [];
  const futureMoves: possible_moves = possibleMovements(my_head);
  verifyPossibleMoves(futureMoves, my_body, directions_to_avoid);

  return next_move.filter((direction) => {
    return !directions_to_avoid.includes(direction);
  });
  
}


