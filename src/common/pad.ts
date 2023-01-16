/**
 * @file pad.ts - Pads a string with a character.
 */

/**
 * Prefixes a string with a character padded to n length.
 */
const prefix = (str: string, char: string, n: number) =>
	n <= str.length ? str : char.repeat(n - str.length) + str;

/**
 * Suffixes a string with a character padded to n length.
 */
const suffix = (str: string, char: string, n: number) =>
	n <= str.length ? str : str + char.repeat(n - str.length);

export default {
	prefix,
	suffix,
};