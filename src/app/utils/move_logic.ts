import { Request } from "express"
import { getHeadCoordinates, getBodyCoordinates, getBoardHeight, getBoardWidth, getOtherSnakes, getFoodCoordinates } from "./game_info"
import { possibleMovements } from "./possible_movements"
import { coordinate } from "./info_interfaces"
import { avoid_walls } from "./avoid_walls";
import { avoid_yourself } from "./avoid_yourself"

export function choose_direction(req: Request): string{

    let my_head: coordinate = getHeadCoordinates(req);
    let my_body: coordinate[] = getBodyCoordinates(req);
    let board_height: number = getBoardHeight(req);
    let board_width: number = getBoardWidth(req);
    let other_snakes: object = getOtherSnakes(req);
    let food_coordinates: object[] = getFoodCoordinates(req);

    let next_move = ["up", "down", "left", "right"];
    next_move = avoid_walls(my_head, board_height, board_width, next_move);
    next_move = avoid_yourself(my_head, my_body, next_move);

    return next_move[0];
}