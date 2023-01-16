/**
 * @file isProd.ts - Determines if the current environment is a production environment.
 */

/**
 * Lazy mode matches "prod" or more.
 */
const REGEX_LAZY = new RegExp(`prod(uction){0}`, 'gi');

/**
 * Strict mode matches "production" only.
 */
const REGEX_STRICT = new RegExp(`prod(uction){1}`, 'gi');

/**
 * Determines if the current environment is a production environment.
 */
export function isProd(strict = false) {
	return (strict ? REGEX_STRICT : REGEX_LAZY).test(process.env.NODE_ENV);
}

export default isProd;
