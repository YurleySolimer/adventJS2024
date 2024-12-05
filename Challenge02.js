/* Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, 
but the frame must follow specific rules. 
Your task is to help the elves generate this magical frame.

Rules:

Given an array of names, you must create a rectangular frame that contains all of them.
Each name must be on a line, aligned to the left.
The frame is built with * and has a border one line thick.
The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side. */


function createFrame(names) {
    if (names && names.length) {
      const maxLength = names.reduce((max, name) => Math.max(max, name.length), 0);
      const frameWidth = maxLength + 4;
      let frame = '*'.repeat(frameWidth) + '\n';
  
      names.forEach(name => {
        const padding = ' '.repeat(maxLength - name.length);
        frame += `* ${name}${padding} *\n`;
      });
  
      frame += '*'.repeat(frameWidth);    
      return frame;
    }
    return '*';
}

createFrame(['midu', 'madeval', 'educalvolpz']);

/* Expected result:
***************
* midu        *
* madeval     *
* educalvolpz *
*************** */
