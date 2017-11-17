/**
 * Constant variables for w
 * @module w-constants
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get VerbSpec () { return d(require('./verb_spec')) }
}
