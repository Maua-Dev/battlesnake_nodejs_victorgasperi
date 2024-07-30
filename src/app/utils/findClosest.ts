import { coordinate } from "./info_interfaces";

export function findClosest(my_head: coordinate, objectives: coordinate[]): coordinate {
    const dist = (firstCoordinate: coordinate, secCoordinate: coordinate): number => Math.abs(firstCoordinate.x - secCoordinate.x) + Math.abs(firstCoordinate.y - secCoordinate.y);

    let closest = objectives[0];
    let minDistance = dist(my_head, closest);

    for (const objective of objectives) {
        const currDist = dist(my_head, objective);
        if (currDist < minDistance) {
            minDistance = currDist;
            closest = objective;
        }
    }

    return closest;

}
