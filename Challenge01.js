/* Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁, 
but some of them are duplicated and must be removed to avoid confusion. 
Additionally, the gifts must be sorted in ascending order before being delivered to the elves.

Your task is to write a function that receives a list of integers (which may include duplicates) 
and returns a new list without duplicates, sorted in ascending order. */

function prepareGifts(gifts) {
    if (!gifts || !Array.isArray(gifts) || gifts.length === 0) {
      return [];
    }
  
    const uniqueGifts = [...new Set(gifts)];
    uniqueGifts.sort((gift1, gift2) => gift1 - gift2);
  
    return uniqueGifts;
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); //Should be [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // Should be [5, 6]