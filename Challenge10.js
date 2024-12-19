/* The elf programmers are creating a small magical assembler to control the machines in Santa Claus's workshop.

To assist them, we will implement a simple interpreter that supports the following magical instructions:

MOV x y: Copies the value x (which can be a number or the content of a register) into register y
INC x: Increments the content of register x by 1
DEC x: Decrements the content of register x by 1
JMP x y: If the value in register x is 0, then jumps to the instruction at index y and continues executing the program from there.
Expected behavior:
If an attempt is made to access, increment, or decrement a register that has not been initialized, the default value 0 will be used.
The jump with JMP is absolute and goes to the exact index indicated by y.
Upon completion, the program should return the content of register A. If A did not have a defined value, it returns undefined.
const instructions = [
  'MOV -1 C', // copies -1 to register 'C',
  'INC C', // increments the value of register 'C'
  'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
  'MOV C A', // copies register 'C' to register 'A',
  'INC A' // increments the value of register 'A'
]

*/

function compile(instructions) {
    let registers = {};
    let index = 0;
  
    while (index < instructions.length) {
      const [command, x, y] = instructions[index].split(' ');
  
      switch (command) {
        case 'MOV':
          registers[y] = isNaN(x) ? (registers[x] || 0) : parseInt(x);
          break;
        case 'INC':
          registers[x] = (registers[x] || 0) + 1;
          break;
        case 'DEC':
          registers[x] = (registers[x] || 0) - 1;
          break;
        case 'JMP':
          if ((registers[x] || 0) === 0) {
            index = parseInt(y);
            continue;
          }
          break;
      }
      index++;
    }
  
    return registers['A'];
  }
  
  const instructions = [
    'MOV -1 C',
    'INC C',
    'JMP C 1',
    'MOV C A',
    'INC A'
  ];
  
  console.log(compile(instructions)); // -> 2
  