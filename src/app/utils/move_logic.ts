import { Request } from "express";
import {
  getHeadCoordinates,
  getBodyCoordinates,
  getBoardHeight,
  getBoardWidth,
  getOtherSnakes,
  getFoodCoordinates,
  getCurrentTurn,
  getCurrentHealth,
} from "./game_info";
// import { possibleMovements } from "./possible_movements";
import { coordinate, snake } from "./info_interfaces";
// import { avoidWalls } from "./avoid_walls";
// import { avoidYourself } from "./avoid_yourself";
// import { avoidOtherSnakes } from "./avoid_snakes";
import { getClosestFoodDir } from "./get_food_direction";
import { pathToFood } from "./findFood";
import { mapGame } from "../classes/mapGame";
import { findBestDirections } from "./findBestDirections";

export function choose_direction(req: Request): string {
  let my_head: coordinate = getHeadCoordinates(req);
  let my_body: coordinate[] = getBodyCoordinates(req);
  let my_health: number = getCurrentHealth(req);
  let board_height: number = getBoardHeight(req);
  let board_width: number = getBoardWidth(req);
  let other_snakes: snake[] = getOtherSnakes(req);
  let food_coordinates: coordinate[] = getFoodCoordinates(req);
  let cur_turn: number = getCurrentTurn(req);
  const map: mapGame = new mapGame(
    my_body,
    other_snakes,
    board_height,
    board_width
  );

  // let next_move = ["up", "down", "left", "right"];
  // next_move = avoidWalls(my_head, board_height, board_width, next_move);
  // next_move = avoidYourself(my_head, my_body, next_move);
  // next_move = avoidOtherSnakes(my_head, other_snakes, next_move);

  const safeMoves: string[] = findBestDirections(my_head, map.gameBoard);

  console.log("POSSIBLE SAFE MOVES AT TURN: " + cur_turn + " " + safeMoves);

  if (my_health <= 60) {
    console.log(
      "HEALTH WARNING. LESS THAN 60 LIFEPOINTS: " +
        my_health +
        " turn " +
        cur_turn
    );
    const closestFoodDir: string = getClosestFoodDir(
      pathToFood(my_head, food_coordinates, map)
    );
    if (closestFoodDir === "") console.log("FOOD DIRECTION FAIL");
    if (safeMoves.includes(closestFoodDir)) {
      console.log(
        "GOING TO FOOD. DIRECTION APPLIED at turn " +
          cur_turn +
          ": " +
          closestFoodDir
      );
      return closestFoodDir;
    }
  }

  console.log("LIFE AT TURN " + cur_turn + " is ok. health: " + my_health);
  return safeMoves[0];

  // if (closestFoodDir !== "" && next_move.includes(closestFoodDir)) {
  //   console.log(
  //     "GOING TO FOOD! Current Direction: " +
  //       closestFoodDir +
  //       " at turn: " +
  //       cur_turn
  //   );
  //   return closestFoodDir;
  // } else {
  //   console.log("RANDOM MOVE!");
  //   return next_move[Math.floor(Math.random() * next_move.length)];
  // }
}
