/* It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. 
We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) 
and a special character to decorate it.

The function should return a string that represents the Christmas tree, constructed as follows:

The tree is made up of triangles of special characters.
The spaces on the sides of the tree are represented with underscores _.
All trees have a trunk of two lines, represented by the # character.
The tree should always have the same length on each side.
You must ensure the tree has the correct shape using line breaks \n for each line. */

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    if (height < 1 || height > 100) {
        return '';
    }

    let tree = '';
    for (let i = 0; i < height; i++) {
        const spaces = '_'.repeat(height - i - 1);
        const characters = ornament.repeat(2 * i + 1);
        tree += spaces + characters + spaces + '\n';
    }

    const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
    tree += trunk + '\n' + trunk;
    return tree;
}

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/