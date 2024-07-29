import { checkIfInBody } from "./checkIfInBody";
import { possible_moves, coordinate } from "./info_interfaces";

export function verifyPossibleMoves(futureMoves: possible_moves, body: coordinate[], directions_to_avoid: string[]) {
  Object.keys(futureMoves).forEach((direction, idx) => {
    let currentMoveCoordinate: coordinate = Object.values(futureMoves)[idx];
    checkIfInBody(body, currentMoveCoordinate, directions_to_avoid, direction);
  });
}
