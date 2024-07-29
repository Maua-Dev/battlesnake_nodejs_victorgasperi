import { coordinate } from "./info_interfaces";


export function checkIfInBody(body: coordinate[], currentMoveCoordinate: coordinate, directions_to_avoid: string[], direction: string) {
  body.forEach(bodyCoordinate => {
    if (bodyCoordinate.x === currentMoveCoordinate.x && bodyCoordinate.y === currentMoveCoordinate.y)
      directions_to_avoid.push(direction);
  });
}
