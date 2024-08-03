import { possible_moves, snake } from "./info_interfaces";
import { possibleMovements } from "./possible_movements";

export function addNewPointsToSnakesBody(snakes: snake[]): void {

    for(const [snake, info] of Object.entries(snakes)) {
        if(snake === "0") continue;

        let possibleOtherSnakeMove: possible_moves = possibleMovements(info.head);

        for(const futureCoordinate of Object.values(possibleOtherSnakeMove)) {
            info.body.push(futureCoordinate);
        }
    }
}