const fs = require("fs");
const filePath =
  "/Users/durofusic/Documents/private-work/advent-of-code-2023/01-2023/input.txt";

// Use fs.readFile to read the contents of the file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
    return;
  }
  let total = 0;
  const lines = data.split("\n");
  for (const element of lines) {
    const numbers = [];
    for (let j = 0; j < element.length; j++) {
      const char = element.charAt(j);
      if (char > "0" && char <= "9") {
        numbers.push(Number(char));
      }
    }

    const sumPerLine = `${numbers[0]}${numbers[numbers.length - 1]}`
    total = total + Number(sumPerLine)
    console.log({sumPerLine, numbers, element})
}

console.log({total})
});

