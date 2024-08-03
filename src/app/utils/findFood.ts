import { Grid, AStarFinder } from "pathfinding";
import { mapGame } from "../classes/mapGame";
import { findClosest } from "./findClosest";
import { coordinate, snake } from "../interfaces/info_interfaces";

export function pathToFood(
  my_head: coordinate,
  foods: coordinate[],
  map: mapGame
): number[][] | null{
  try {
    const currentGrid = new Grid(map.gameBoard);

    const closestFood = findClosest(my_head, foods);

    const finder = new AStarFinder();
    const path = finder.findPath(
      my_head.x,
      map.gameBoard.length - 1 - my_head.y,
      closestFood.x,
      map.gameBoard.length - 1 - closestFood.y,
      currentGrid.clone()
    );

    return path;
  } catch (error: any) {
    console.log("ERRO DE TIPO");
    return null;
  }
}
