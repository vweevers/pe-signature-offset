'use strict';

const readExactly = require('fs-read-exactly')

module.exports = function PESignatureOffset (fdOrFile, done) {
  readExactly(fdOrFile, 0x3c, 4, function (err, buf) {
    if (err) return done(err)
    done(null, buf.readUIntLE(0, 4))
  })
}
