/**
 * @file numbers.ts - Number utilities.
 */

/**
 * isOdd
 */
const isOdd = (n: number) => n % 2 === 1;

/**
 * isEven (you can't make this stuff up)
 */
const isEven = (n: number) => n % 2 === 0;

/**
 * Convert a number to an ASCII character.
 */
const toAscii = (n: number) => String.fromCharCode(n);

/**
 * Convert an ASCII character to a number.
 */
const fromAscii = (c: string) => c.charCodeAt(0);

/**
 * Convert a number to a hexadecimal string.
 */
const toHex = (n: number) => n.toString(16);

/**
 * Convert a hexadecimal string to a number.
 */
const fromHex = (h: string) => parseInt(h, 16);

/**
 * Comma-delimit a number by thousands.
 */
const comma = (n: number, delimiter = ',') => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);

export default {
	isOdd,
	isEven,
	toAscii,
	fromAscii,
	toHex,
	fromHex,
	comma,
};
