/* The elves at the North Pole have created a special robot 🤖 
that helps Santa Claus distribute gifts inside a large warehouse. 
The robot moves on a 2D plane and we start from the origin (0, 0).

We want to know if, after executing a series of movements, 
the robot returns to exactly where it started.

The robot's basic commands are:

L: Move to the left
R: Move to the right
U: Move upwards
D: Move downwards
But it also has certain modifiers for the movements:

*: The movement is done with double intensity (e.g., *R means RR)
!: The next movement is inverted (e.g., R!L is considered as RR)
?: The next movement is done only if it hasn't been done before (e.g., R?R means R)
Note: When the movement is inverted with ! the inverted movement is counted and not the original one. 
For example, !U?U inverts the U movement, so it counts as having done the D movement but not the U. Thus, !U?U translates to D?U, and therefore, the final U movement is done.

You must return:

true: if the robot returns exactly to where it started
[x, y]: if the robot does not return to where it started, return the position where it stopped */


/**
 * @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    const position = { x: 0, y: 0 };
    const directions = {
        'L': [-1, 0],
        'R': [1, 0],
        'U': [0, 1],
        'D': [0, -1]
    };
    const opposites = { 'L': 'R', 'R': 'L', 'U': 'D', 'D': 'U' };
    const usedMoves = new Set();
    
    for (let i = 0; i < moves.length; i++) {
        const current = moves[i];
        let intensity = 1;
        let next = moves[i + 1];
        
        if (['*', '!', '?'].includes(current) && !next) continue;
        
        if (current === '*') {
            intensity = 2;
            i++;
            next = applyMove(next, intensity);
        } else if (current === '!') {
            i++;
            next = applyMove(opposites[next]);
        } else if (current === '?') {
            i++;
            if (!usedMoves.has(next)) {
                next = applyMove(next);
            }
        } else {
            applyMove(current);
        }
        
        continue;
        
        function applyMove(dir, int = 1) {
            if (!dir) return;
            const [dx, dy] = directions[dir];
            position.x += dx * int;
            position.y += dy * int;
            usedMoves.add(dir);
            return dir;
        }
    }
    
    return position.x === 0 && position.y === 0 ? true : [position.x, position.y];
}

console.log(isRobotBack('R'));       // [1, 0]
console.log(isRobotBack('RL'));      // true
console.log(isRobotBack('RLUD'));    // true
console.log(isRobotBack('*RU'));     // [2, 1]
console.log(isRobotBack('R*U'));     // [1, 2]
console.log(isRobotBack('LLL!R'));   // [-4, 0]
console.log(isRobotBack('R?R'));     // [1, 0]
console.log(isRobotBack('U?D'));     // true
console.log(isRobotBack('R!L'));     // [2, 0]
console.log(isRobotBack('U!D'));     // [0, 2]
console.log(isRobotBack('R?L'));     // true
console.log(isRobotBack('U?U'));     // [0, 1]
console.log(isRobotBack('*U?U'));    // [0, 2]
console.log(isRobotBack('U?D?U'));   // true
console.log(isRobotBack('R!U?U'));   // [1, 0]
console.log(isRobotBack('UU!U?D'));  // [0, 1]


// Step-by-step examples:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> moves to the right 
// '!U' -> inverts and becomes 'D'
// '?U' -> moves upwards, because the 'U' movement hasn't been done yet

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> moves upwards
// 'U'  -> moves upwards
// '!U' -> inverts and becomes 'D'
// '?D' -> does not move, since the 'D' movement has already been done