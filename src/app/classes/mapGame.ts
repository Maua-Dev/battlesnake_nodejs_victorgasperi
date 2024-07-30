import { snake } from "../utils/info_interfaces";

export class mapGame {
  private _gameBoard: number[][]; 

  public get gameBoard(): number[][] {
    return this._gameBoard;
  }

  constructor(snakes: snake[]) {
    this._gameBoard = this.mapCurrentBoard(snakes);
  }

  private mapCurrentBoard(snakes: snake[]): number[][] {
    let gameBoard: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
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
      }
    }
    return gameBoard;
  }
}
