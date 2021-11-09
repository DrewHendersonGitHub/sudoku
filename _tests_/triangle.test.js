import Sudoku from './../src/triangle.js';

describe('Sudoku', () => {
  
  test('should make a sudoku object', () => {
    const newboard = new Sudoku();
    expect(newboard.board[0][0]).toEqual(1);
  });
});
describe('rowCheck', () => {
  
  test('should check the first row to see if it has 1-9', () => {
    let row = [4, 7, 2, 3, 1, 9, 8, 5, 6]
    let newboard = new Sudoku();
    row = newboard.rowCheck(row);
    expect(row).toEqual(1);
  });
});