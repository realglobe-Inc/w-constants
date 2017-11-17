/**
 * Test for VerbSpec.
 * Runs with mocha.
 */
'use strict'

const VerbSpec = require('../lib/VerbSpec')
const {ok, equal} = require('assert')

describe('verb-spec', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    for (const name of Object.keys(VerbSpec)) {
      ok(VerbSpec[name])
    }
  })
})

/* global describe, before, after, it */
