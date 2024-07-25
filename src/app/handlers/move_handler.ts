import { Request, Response } from "express"

export function snakeMovement(req: Request, res: Response) {
  try {

    console.log("Test");
    const directions = ["up", "down", "left", "right"];
    const i = Math.floor(Math.random() * directions.length);
    const response = {
        move: directions[i],
        shout: `I'm moving ${directions[i]}!`
    };
    res.json(response);

  } catch (error: any) {
    console.error(error)
    res.status(500).send("Internal Server Error: " + error.message)
  }
}