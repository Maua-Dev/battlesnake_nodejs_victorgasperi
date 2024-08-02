import { coordinate, snake } from "../utils/info_interfaces";
import { generateGrid } from "../utils/generate_grid";

export class mapGame {
  private _gameBoard: number[][]; 

  public get gameBoard(): number[][] {
    return this._gameBoard;
  }

  constructor(snakes: snake[], board_height: number, board_width: number) {
    this._gameBoard = this.mapCurrentBoard(snakes, board_height, board_width);
  }

  private mapCurrentBoard(snakes: snake[], board_height: number, board_width: number): number[][] {

  let gameBoard: number[][] = generateGrid(board_height, board_width);

    for (let i = 0; i < 11; i++) {
      let snakesWithXCoodinate: snake[] = snakes.filter((snake) =>
        snake.body.some((bodyCoordinate) => bodyCoordinate.y === i)
      );
      
      for (let j = 0; j < 11; j++) {
        snakesWithXCoodinate.forEach((snakeThatHasY) => {
          snakeThatHasY.body.forEach((bodyCoordinate) => {
            if (bodyCoordinate.x === j) gameBoard[bodyCoordinate.y][bodyCoordinate.x] = 1;
          });
        });
      }
    }
    return gameBoard;
  }
}
