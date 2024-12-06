/* We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.

The box has a present (*) and counts as "inside the box" if:

It is completely surrounded by # on the box's edges.
The * is not on the box's edges.
Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise. 

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false

*/


/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    if (box[0].includes('*') || box[box.length - 1].includes('*')) {
        return false;
    }

    for (let i = 1; i < box.length - 1; i++) {
        const item = box[i];
        if (item.startsWith('#') && item.endsWith('#') && item.includes('*')) {
            return true;
        }
    }

    return false;
}

const gift = inBox(["#####","#   #","#   #","#   #","#####"]);
console.log(gift); //false

const gift2 = inBox(["#####","#   #","#  #*","#####"]);
console.log(gift2); //false

const gift3 = inBox(["####","#* #","#  #","####"]);
console.log(gift3); //true

const gift4 = inBox(["###","#*#","###"]);
console.log(gift4) // true


