import { coordinate, possible_moves } from "./info_interfaces";

export function possibleMovements(my_head: coordinate): possible_moves {
    return {
        "up": {
            "x": my_head["x"],
            "y": my_head["y"] + 1
        },
        "down": {
            "x": my_head["x"],
            "y": my_head["y"] - 1
        },
        "left": {
            "x": my_head["x"] - 1,
            "y": my_head["y"]
        },
        "right": {
            "x": my_head["x"] + 1,
            "y": my_head["y"]
        }
    }
}