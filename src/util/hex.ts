/**
 * Prepends hex prefix to an array of nibbles.
 * @method addHexPrefix
 * @param {Array} Array of nibbles
 * @returns {Array} - returns buffer of encoded data
 **/
export function addHexPrefix(key: number[], terminator: boolean): number[] {
  // odd
  if (key.length % 2) {
    key.unshift(1)
  } else {
    // even
    key.unshift(0)
    key.unshift(0)
  }

  if (terminator) {
    key[0] += 2
  }

  return key
}

/**
 * Removes hex prefix of an array of nibbles.
 * @method removeHexPrefix
 * @param {Array} Array of nibbles
 * @private
 */
export function removeHexPrefix(val: number[]): number[] {
  if (val[0] % 2) {
    val = val.slice(1)
  } else {
    val = val.slice(2)
  }

  return val
}

/**
 * Returns true if hexprefixed path is for a terminating (leaf) node.
 * @method isTerminator
 * @param {Array} key - an hexprefixed array of nibbles
 * @private
 */
export function isTerminator(key: number[]): boolean {
  return key[0] > 1
}
