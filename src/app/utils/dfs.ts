
export function dfs(
    grid: number[][],
    i: number,
    j: number,
    canBeVisited: number,
    markVisited: number
): number {
    const n: number = grid.length; // qtd linhas
    const m: number = grid[0].length; // qtd colunas
    let cont: number = 1;

    // casos base
    if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] !== canBeVisited) return 0;
    else {
        grid[i][j] = markVisited;
        cont += dfs(grid, i + 1, j, canBeVisited, markVisited); // cima 
        cont += dfs(grid, i - 1, j, canBeVisited, markVisited); // baixo
        cont += dfs(grid, i, j + 1, canBeVisited, markVisited); // esquerda
        cont += dfs(grid, i, j - 1, canBeVisited, markVisited); // direita
    }
    return cont;
}
