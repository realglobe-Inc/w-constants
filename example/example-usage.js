'use strict'

const {VerbSpec} = require('w-constants')

async function tryExample () {
  const {RESERVED_NAMES} = VerbSpec
  console.log(RESERVED_NAMES.split(','))
}

tryExample().catch((err) => console.error(err))
