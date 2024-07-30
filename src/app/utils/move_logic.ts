import { Request } from "express";
import {
  getHeadCoordinates,
  getBodyCoordinates,
  getBoardHeight,
  getBoardWidth,
  getOtherSnakes,
  getFoodCoordinates,
} from "./game_info";
import { possibleMovements } from "./possible_movements";
import { coordinate, snake } from "./info_interfaces";
import { avoidWalls } from "./avoid_walls";
import { avoidYourself } from "./avoid_yourself";
import { avoidOtherSnakes } from "./avoid_snakes";
import { getClosestFoodDir } from "./get_food_direction";
import { goToFood } from "./findFood";

export function choose_direction(req: Request): string {
  let my_head: coordinate = getHeadCoordinates(req);
  let my_body: coordinate[] = getBodyCoordinates(req);
  let board_height: number = getBoardHeight(req);
  let board_width: number = getBoardWidth(req);
  let other_snakes: snake[] = getOtherSnakes(req);
  let food_coordinates: coordinate[] = getFoodCoordinates(req);

  let next_move = ["up", "down", "left", "right"];
  next_move = avoidWalls(my_head, board_height, board_width, next_move);
  next_move = avoidYourself(my_head, my_body, next_move);
  next_move = avoidOtherSnakes(my_head, other_snakes, next_move);

  if (
    next_move.includes(
      getClosestFoodDir(goToFood(my_head, food_coordinates, other_snakes))
    )
    
  ) {
    console.log("GOING TO FOOD!");
    return getClosestFoodDir(goToFood(my_head, food_coordinates, other_snakes));
    
  } else {
    return next_move[Math.floor(Math.random() * next_move.length)];
  }
}
