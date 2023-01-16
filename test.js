const { isProd, nofavicon, numbers, pad, path } = require('./dist/joint');

// Test isProd
console.log(`isProd(): ${isProd()}`);

// Test nofavicon (kind of) (none, file, url)
const newline = require('os').EOL;
console.log(`nofavicon.none: ${nofavicon.none.toString().replaceAll(newline, ' ')}`);
console.log(`nofavicon.file: ${nofavicon.file.toString().replaceAll(newline, ' ')}`);
console.log(`nofavicon.url: ${nofavicon.url.toString().replaceAll(newline, ' ')}`);

// Test numbers
console.log(`isOdd(1): ${numbers.isOdd(1)}`);
console.log(`isEven(1): ${numbers.isEven(1)}`);
console.log(`isOdd(2): ${numbers.isOdd(2)}`);
console.log(`isEven(2): ${numbers.isEven(2)}`);
console.log(`toAscii(65): ${numbers.toAscii(65)}`);
console.log(`fromAscii('A'): ${numbers.fromAscii('A')}`);
console.log(`toHex(65): ${numbers.toHex(65)}`);
console.log(`fromHex('41'): ${numbers.fromHex('41')}`);
console.log(`comma(1): ${numbers.comma(1)}`);
console.log(`comma(1000000): ${numbers.comma(1000000)}`);

// Test pad
console.log(`pad.prefix('Testing', '-', 20): ${pad.prefix('Testing', '-', 20)}`);
console.log(`pad.suffix('Testing', '*', 20): ${pad.suffix('Testing', '*', 20)}`);

// Test path
console.log(`path.join('a', 'b', 'c'): ${path.join('a', 'b', 'c')}`);
console.log(`path.separator('a/b/c'): ${path.separator('a/b/c')}`);
