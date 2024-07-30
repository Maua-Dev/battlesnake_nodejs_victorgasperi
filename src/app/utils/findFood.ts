import { Grid, AStarFinder } from "pathfinding";
import { mapGame } from "../classes/mapGame";
import { findClosest } from "./findClosest";
import { coordinate, snake } from "./info_interfaces";

export function goToFood(my_head: coordinate, foods: coordinate[], snakes: snake[]): number[][] {
    const currentGrid = new Grid(new mapGame(snakes).gameBoard);

    const closestFood = findClosest(my_head, foods);

    const finder = new AStarFinder();
    const path = finder.findPath(
        my_head.x,
        my_head.y,
        closestFood.x,
        closestFood.y,
        currentGrid.clone()
    );

    return path;
}
