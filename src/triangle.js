export default function Sudoku() {
  this.board = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
}

Sudoku.prototype.rowCheck = function(row) {
  let newArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < 9; i++) {
    newArray[row[i] - 1] = 1;
  }
  if (newArray[0] === 1 && newArray[1] === 1 && newArray[2] === 1 && newArray[3] === 1 && newArray[4] === 1 && newArray[5] === 1 && newArray[6] === 1 && newArray[7] === 1 && newArray[8] === 1) {
    return 1;
  }
  return 0;
}