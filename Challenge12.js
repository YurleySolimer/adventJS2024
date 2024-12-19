/* You are in a very special market where Christmas trees 🎄 are sold. Each one comes decorated with a series of very peculiar ornaments, 
and the price of the tree is determined by the ornaments it has.

*: Snowflake - Value: 1
o: Christmas Ball - Value: 5
^: Decorative Tree - Value: 10
#: Shiny Garland - Value: 50
@: Polar Star - Value: 100
Normally, you would sum up all the values of the ornaments and that's it…

But, watch out! If an ornament is immediately to the left of another of greater value, instead of adding, its value is subtracted. */

/** @param {string} ornaments
 * @return {number} - The price of the tree
 */

function calculatePrice(ornaments) {
    const ornamentsValues = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100
    };
    
    let total = 0;
    
    for (let i = 0; i < ornaments.length; i++) {
        const current = ornamentsValues[ornaments[i]];
        const next = ornamentsValues[ornaments[i + 1]];

        if (!current) {
            return undefined;
        }

        if (next && current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}

console.log(calculatePrice('***'));  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'));   // 4   (5 - 1)
console.log(calculatePrice('o*'));   // 6   (5 + 1)
console.log(calculatePrice('*o*'));  // 5   (-1 + 5 + 1) 
console.log(calculatePrice('**o*')); // 6   (1 - 1 + 5 + 1) 
console.log(calculatePrice('o***')); // 8   (5 + 3)
console.log(calculatePrice('*o@'));  // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'));   // 49  (-1 + 50)
console.log(calculatePrice('@@@'));  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'));   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'));  // undefined (Z is unknown)