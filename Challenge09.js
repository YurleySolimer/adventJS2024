/* The elves are playing with a magical train 🚂 that carries gifts. 
This train moves on a board represented by an array of strings.

The train consists of an engine (@), followed by its carriages (o), 
and must collect magical fruits (*) which serve as fuel. The movement of the 
train follows these rules:

You will receive two parameters board and mov.

board is an array of strings that represents the board:

@ is the train's engine.
o are the train's carriages.
* is a magical fruit.
· are empty spaces.
mov is a string that indicates the next movement of the train from the train's head @:

'L': left
'R': right
'U': up
'D': down.
With this information, you must return a string:

'crash': If the train crashes into the edges of the board or itself.
'eat': If the train collects a magical fruit (*).
'none': If it moves without crashing or collecting any magical fruit.


/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */


function moveTrain(board, mov) {
  let headRow, headCol;
  board.some((row, i) => {
    const col = row.indexOf('@');
    if (col !== -1) {
      headRow = i;
      headCol = col;
      return true;
    }
  });

  const movements = {
    'L': [0, -1],
    'R': [0, 1],
    'U': [-1, 0],
    'D': [1, 0]
  };

  const [rowChange, colChange] = movements[mov] || [0, 0];
  const newRow = headRow + rowChange;
  const newCol = headCol + colChange;

  const newPosition = board[newRow] && board[newRow][newCol];
  if (newPosition === undefined || newPosition === 'o') {
    return 'crash';
  }
  if (newPosition === '*') {
    return 'eat';
  }

  return 'none';
}

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
];

console.log(moveTrain(board, 'U')); // ➞ 'eat'
console.log(moveTrain(board, 'D')); // ➞ 'crash'
