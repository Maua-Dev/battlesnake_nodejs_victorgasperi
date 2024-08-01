function generateGrid(rows: number, cols: number, initialValue: number = 0): number[][] {
    const grid: number[][] = [];
    
    for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < cols; j++) {
            row.push(initialValue);
        }
        grid.push(row);
    }
    
    return grid;
}