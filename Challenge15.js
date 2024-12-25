/* ChatGPT has arrived at the North Pole and the elf Sam 
Elfman is working on an application for managing gifts and children.

To enhance the presentation, he wants to create a function 
drawTable that receives an array of objects and converts it into a text table.

The drawn table should represent the object data as follows:

It has a header with the column name.
The column name has the first letter capitalized.
Each row should contain the values of the objects in the corresponding order.
Each value must be left-aligned.
Fields always leave a space on the left.
Fields leave the necessary space on the right to align the box.
Look at the example to see how you should draw the table:

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+ */

function drawTable(data) {
       const headers = Object.keys(data[0]);
    const columnWidths = new Array(headers.length).fill(0);
    
    const capitalizedHeaders = headers.map((header, i) => {
        const capitalized = header.charAt(0).toUpperCase() + header.slice(1);
        columnWidths[i] = capitalized.length;
        return capitalized;
    });

    const tableRows = data.map(row => 
        headers.map((header, i) => {
            const cell = String(row[header] ?? '');
            columnWidths[i] = Math.max(columnWidths[i], cell.length);
            return cell;
        })
    );

    const separator = `+${columnWidths.map(w => '-'.repeat(w + 2)).join('+')}+`;
    const formatRow = row => 
        `| ${row.map((cell, i) => cell.padEnd(columnWidths[i])).join(' | ')} |`;

    let result = separator + '\n';
    result += formatRow(capitalizedHeaders) + '\n';
    result += separator + '\n';
    
    for (let i = 0; i < tableRows.length; i++) {
        result += formatRow(tableRows[i]);
        if (i < tableRows.length - 1) result += '\n';
    }
    
    return result + '\n' + separator;
}
console.log(drawTable([
  { id: 'midugato', isCat: true },
  { id: 'miduperro', isCat: false }
]));

console.log(drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
]));

console.log(drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
]));

