import { coordinate, possible_moves } from "./info_interfaces";
import { possibleMovements } from "./possible_movements";

export function avoid_yourself(
  my_head: coordinate,
  my_body: coordinate[],
  next_move: string[]
): string[] {
  let directions_to_avoid: string[] = [];
  const futureMoves: possible_moves = possibleMovements(my_head);

  my_body.forEach( item => {
    if (futureMoves["up"]["y"] === item.y) directions_to_avoid.push("up");
    if (futureMoves["down"]["y"] === item.y) directions_to_avoid.push("down");
    if (futureMoves["left"]["x"] === item.x) directions_to_avoid.push("left");
    if (futureMoves["right"]["x"] === item.x) directions_to_avoid.push("right");
  });   

  let aux: string[] = next_move.filter( direction => {
    return !directions_to_avoid.includes(direction);
  });

  console.log("EVITANDO CORPO: " + aux);
  return aux;

}
