import { coordinate, possible_moves } from "./info_interfaces";
import { possibleMovements } from "./possible_movements";

export function avoid_walls(my_head: coordinate, board_height: number, board_width: number, next_move: string[]): string[] {

    let directions_to_avoid: string[] = [];
    const futureMoves: possible_moves = possibleMovements(my_head);

    if(futureMoves["up"]["y"] === board_height) directions_to_avoid.push("up");
    if(futureMoves["down"]["y"] < 0) directions_to_avoid.push("down");
    if(futureMoves["left"]["x"] < 0) directions_to_avoid.push("left");
    if(futureMoves["right"]["x"] === board_width) directions_to_avoid.push("right");

    let aux: string[] = next_move.filter( direction => {
        return !directions_to_avoid.includes(direction);
    });

    console.log("EVITANDO PAREDE: " + aux);
    return aux;
}