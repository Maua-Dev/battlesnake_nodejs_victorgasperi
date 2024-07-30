import { getDirection } from "./getDirection";

export function getClosestFoodDir(path: number[][]): string {
    let firstCoordinate = {
        x: path[0][0],
        y: path[0][1]
    }
    let secondCoordinate = {
        x: path[1][0],
        y: path[1][1]
    }
    return getDirection(firstCoordinate, secondCoordinate);
}
