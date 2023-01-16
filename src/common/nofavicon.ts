/**
 * @file nofavicon.ts - Utilities for handling favicon.ico requests.
 */

import { NextFunction, Request, Response } from 'express';

const FAVICON_URL = /\/favicon\.ico/gi;
const CODE_NO_CONTENT = 204;

/**
 * None: Express middleware that returns HTTP 204 if the request is for the favicon.ico
 */
function none() {
	return (req: Request, res: Response, next: NextFunction) =>
		FAVICON_URL.test(req.url) ? res.sendStatus(CODE_NO_CONTENT) : next();

}
/**
 * File: Express middleware that loads and serves the provided favicon.ico file.
 * @param faviconPath The path to the favicon.ico file.
 */
function file(faviconPath: string) {
	return (req: Request, res: Response, next: NextFunction) =>
		FAVICON_URL.test(req.url) ? res.sendFile(faviconPath) : next();

}

/**
 * URL: Express middleware that redirects to the provided favicon.ico URL.
 * @param faviconURL The URL to the favicon.ico file.
 */
function url(faviconURL: string) {
	return (req: Request, res: Response, next: NextFunction) =>
		FAVICON_URL.test(req.url) ? res.redirect(faviconURL) : next();
}

export default {
	none,
	file,
	url
};
