'use strict';

const test = require('tape')
    , fs = require('fs')
    , readExactly = require('fs-read-exactly')
    , getOffset = require('.')

test('filename', function (t) {
  t.plan(4)

  getOffset('fixtures/dummy.exe', function (err, offset) {
    t.ifError(err, 'no error')
    t.is(offset, 128, 'got offset')

    readExactly('fixtures/dummy.exe', offset, 4, function (err, chunk) {
      t.ifError(err, 'no read error')
      t.is(String(chunk), 'PE\0\0', 'got signature')
    })
  })
})

test('fd', function (t) {
  t.plan(6)

  fs.open('fixtures/dummy.exe', 'r', function (err, fd) {
    t.ifError(err, 'no open error')

    getOffset(fd, function (err, offset) {
      t.ifError(err, 'no error')
      t.is(offset, 128)

      readExactly(fd, offset, 4, function (err, chunk) {
        t.ifError(err, 'no read error')
        t.is(String(chunk), 'PE\0\0', 'got signature')

        fs.close(fd, function (err) {
          t.ifError(err, 'no close error')
        })
      })
    })
  })
})
