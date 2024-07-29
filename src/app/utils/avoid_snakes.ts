import { coordinate, possible_moves, snake } from "./info_interfaces";
import { possibleMovements } from "./possible_movements";
import { verifyPossibleMoves } from "./verifyPossibleMoves";


export function avoidOtherSnakes(my_head: coordinate, snakes: snake[], next_move: string[]): string[] {
    let directions_to_avoid: string[] = [];
    const futureMoves: possible_moves = possibleMovements(my_head);

    snakes.forEach( snake => {
        verifyPossibleMoves(futureMoves, snake.body, directions_to_avoid);
    })

    return next_move.filter( direction => {
        return !directions_to_avoid.includes(direction);
    })

}