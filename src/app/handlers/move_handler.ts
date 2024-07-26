import { Request, Response } from "express"
import { get_head_coordinates } from "../utils/game_info"


export function snakeMovement(req: Request, res: Response) {
  try {
    const directions = ["up", "down", "left", "right"];
    const i = Math.floor(Math.random() * directions.length);
    const response = {
        move: directions[i],
        shout: `I'm moving ${directions[i]}!`
    };
    console.log(get_head_coordinates(req));
    res.json(response);

  } catch (error: any) {
    console.error(error)
    res.status(500).send("Internal Server Error: " + error.message)
  }
}