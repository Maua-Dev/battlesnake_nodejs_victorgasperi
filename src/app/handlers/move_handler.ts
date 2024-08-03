import { Request, Response } from "express"
import { choose_direction } from "../utils/move_logic";


export function snakeMovement(req: Request, res: Response) {
  try {
    let direction = choose_direction(req);
    const response = {
        move: direction,
        shout: `I'm moving ${direction}!`
    };

    res.json(response);

  } catch (error: any) {
    console.error(error)
    res.status(500).send("Internal Server Error: " + error.message)
  }
}