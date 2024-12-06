/* Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. 
Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. 
Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño! */

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    if (!Array.isArray(shoes) && !shoes.length > 0) {
        return [];
    }

    const counts = {};
    shoes.forEach(({ type, size }) => {
        counts[size] = counts[size] || { I: 0, R: 0 };
        counts[size][type]++;
      });
      
    const pairedSizes = [];

    for (const size of Object.keys(counts)) {
        const { I, R } = counts[size];
        const pairs = Math.min(I, R);
      
        pairedSizes.push(...Array(pairs).fill(Number(size)));
    }      

    return pairedSizes;
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 38 },
    { type: 'I', size: 42 }
  ]
  
console.log(organizeShoes(shoes));
// [38, 42]
  
const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]

console.log(organizeShoes(shoes2));
// [38, 38]

const shoes3 = [
    {  },
    { type: 't', size: 38 },
    { type: 'R', size: 42 },
    { type: 'r', size: 38 },
    { type: 'r', size: 42 }
]

console.log(organizeShoes(shoes3));
// []
