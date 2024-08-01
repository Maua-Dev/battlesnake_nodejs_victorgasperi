import { coordinate, snake } from "../utils/info_interfaces";
import { generateGrid } from "../utils/generate_grid";

export class mapGame {
  private _gameBoard: number[][]; 

  public get gameBoard(): number[][] {
    return this._gameBoard;
  }

  constructor(my_body: coordinate[], snakes: snake[], board_height: number, board_width: number) {
    this._gameBoard = this.mapCurrentBoard(my_body, snakes, board_height, board_width);
  }

  private mapCurrentBoard(my_body: coordinate[], snakes: snake[], board_height: number, board_width: number): number[][] {

  let gameBoard: number[][] = generateGrid(board_height, board_width);

    for (let i = 0; i < 11; i++) {
      let snakesWithXCoodinate: snake[] = snakes.filter((snake) =>
        snake.body.forEach((bodyCoordinate) => bodyCoordinate.x === i)
      );
      
      for (let j = 0; j < 11; j++) {
        if (snakesWithXCoodinate === null) gameBoard[i][j] = 0;
        snakesWithXCoodinate.forEach((snakeThatHasX) => {
          snakeThatHasX.body.forEach((bodyCoordinate) => {
            if (bodyCoordinate.y === j) gameBoard[i][j] = 1;
          });
        });
        my_body.forEach( coordinate => {
          if(coordinate.x === i && coordinate.y === j) gameBoard[i][j] = 1;
        });
      }
    }
    return gameBoard;
  }
}
