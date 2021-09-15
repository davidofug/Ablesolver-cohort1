const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('negative-words.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.
  fs.writeFileSync( "negative-words.php", `<?php\n\t$negativeWords = [\n`,{flag:'a'})
  for await (let line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    // console.log(`Line from file: ${line}`);
    line = line.replaceAll('"', "'")
    fs.writeFileSync( "negative-words.php", `\t\t"${line}",\n`, {flag:'a'})
  }
  fs.writeFileSync( "negative-words.php", `\n\t];`,{flag:'a'})
}

processLineByLine();