import { getDirection } from "./getDirection";

export function getClosestFoodDir(board_height: number, path: number[][] | null): string {
    if(path === null) return "";

    let firstCoordinate = {
        x: path[0][0],
        y: board_height - 1 - path[0][1]
    }
    let secondCoordinate = {
        x: path[1][0],
        y: board_height - 1 - path[1][1]
    }
    return getDirection(firstCoordinate, secondCoordinate);
}
