
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./metaverse-sdk.cjs.production.min.js')
} else {
  module.exports = require('./metaverse-sdk.cjs.development.js')
}
