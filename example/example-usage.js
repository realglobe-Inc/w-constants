'use strict'

const {SignalEvents} = require('w-constants')

async function tryExample () {
  const {REQUEST} = SignalEvents
  console.log(REQUEST)
}

tryExample().catch((err) => console.error(err))
