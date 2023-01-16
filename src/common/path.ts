/**
 * @file path.ts - Path utilities using `process.cwd()`, since `__dirname` is not reliable.
 * @see https://stackoverflow.com/a/9874415/9665770
 */

import path from 'path';

/**
 * Joiner
 */
const join = (...args: string[]) => path.join(process.cwd(), ...args);

/**
 * Convert path separators to the provided separator (defaults to system separator in `path.sep`)
 */
const separator = (p: string, sep = path.sep) => p.replace(/[/\\]/g, sep);

export default {
	join,
	separator,
};