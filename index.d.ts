/**
 * Find matching values for a given name key in an object.
 * 
 * @param obj - An object to inspect.
 * @param {String} name - A name key to find inside a give object.
 * @returns {Array} An array of found matches.
 * 
 * @example
 * ```js
 * const findUpKeys = require('find-up-keys');
 * 
 * // some random nested object
 * const obj = {
 *   title: 'Hello, World!',
 *   description: 'Hi!',
 *   info: {
 *     description: 'more desc',
 *     tags: ['...'],
 *     extras: {
 *       description: null
 *     }
 *   }
 * };
 * 
 * findUpKeys(obj, 'description'); // <= ['Hi!', 'more desc', null]
 * ```
 */
declare function findUpKeys<T = any>(obj: any, name: string): T[]

export = findUpKeys