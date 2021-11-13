
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dfy-sdk.cjs.production.min.js')
} else {
  module.exports = require('./dfy-sdk.cjs.development.js')
}
