import { Request, Response } from "express"

export function moveHandler(req: Request, res: Response) {
  try {

    res.json({
      apiversion: "1",
      author: "Victor Gasperi",
      color: "#FF1493",
      head: "tiger-king",
      tail: "weight",
      version: "1.0.0"
    })

  } catch (error: any) {
    console.error(error)
    res.status(500).send("Internal Server Error: " + error.message)
  }
}