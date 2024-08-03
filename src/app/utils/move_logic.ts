import { Request } from "express";
import {
  getHeadCoordinates,
  getBoardHeight,
  getBoardWidth,
  getOtherSnakes,
  getFoodCoordinates,
  getCurrentHealth,
} from "./game_info";
import { coordinate, snake } from "./info_interfaces";
import { getClosestFoodDir } from "./get_food_direction";
import { pathToFood } from "./findFood";
import { mapGame } from "../classes/mapGame";
import { findBestDirections } from "./findBestDirections";
import { addNewPointsToSnakesBody } from "./addNewPointsToSnakesBody";

export function choose_direction(req: Request): string {
  let my_head: coordinate = getHeadCoordinates(req);
  let my_health: number = getCurrentHealth(req);
  let board_height: number = getBoardHeight(req);
  let board_width: number = getBoardWidth(req);
  let other_snakes: snake[] = getOtherSnakes(req);
  let food_coordinates: coordinate[] = getFoodCoordinates(req);

  addNewPointsToSnakesBody(other_snakes);

  const map: mapGame = new mapGame(
    other_snakes,
    board_height,
    board_width
  );

  const safeMoves: string[] = findBestDirections(my_head, map.gameBoard);

  if (my_health <= 60) {
    const closestFoodDir: string = getClosestFoodDir(
      pathToFood(my_head, food_coordinates, map)
    );

    if (safeMoves.includes(closestFoodDir)) {
      return closestFoodDir;
    }
  }
  return safeMoves[0];
}
