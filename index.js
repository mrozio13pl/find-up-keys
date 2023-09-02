'use strict'

/**
 * Get all occurrences of name keys.
 */
function findUpKeys(obj, name) {
  if (typeof obj !== 'object') return []

  const result = []

  for (const key in obj) {
    if (key === name) {
      result.push(obj[key])
    }

    if (typeof obj[key] === 'object') {
      result.push(...findUpKeys(obj[key], name))
    }
  }

  return result
}

/**
 * Expose `findUpKeys()`.
 */
module.exports = findUpKeys