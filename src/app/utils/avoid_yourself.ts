import { coordinate, possible_moves } from "./info_interfaces";
import { possibleMovements } from "./possible_movements";

export function avoid_yourself(
  my_head: coordinate,
  my_body: coordinate[],
  next_move: string[]
): string[] {
  let directions_to_avoid: string[] = [];
  const futureMoves: possible_moves = possibleMovements(my_head);

  //TODO: fix this line. The includes does no work
  Object.keys(futureMoves).forEach((direction, idx) => {
    if (my_body.includes(Object.values(futureMoves)[idx]))
      directions_to_avoid.push(direction);
  });

  let aux: string[] = next_move.filter((direction) => {
    return !directions_to_avoid.includes(direction);
  });

  console.log("EVITANDO CORPO: " + aux);
  return aux;
}
