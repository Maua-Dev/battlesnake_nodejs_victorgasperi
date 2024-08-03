import { coordinate } from "../interfaces/info_interfaces";

export function getDirection(firstCoordinate: coordinate, secCoordinate: coordinate): string {
    if (firstCoordinate.x < secCoordinate.x) return "right";
    if (firstCoordinate.x > secCoordinate.x) return "left";
    if (firstCoordinate.y < secCoordinate.y) return "down";
    if (firstCoordinate.y > secCoordinate.y) return "up";
    return "";
}
