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
  
    snakes.forEach(snake => {
      snake.body.forEach(bodyCoordinate => {
        // Transform the y-coordinate to match the bottom-left origin
        let transformedY = board_height - 1 - bodyCoordinate.y;
        if (transformedY >= 0 && transformedY < board_height && bodyCoordinate.x >= 0 && bodyCoordinate.x < board_width) {
          gameBoard[transformedY][bodyCoordinate.x] = 1;
        }
      });
    });
  
    return gameBoard;
  }
}
