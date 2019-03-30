# pe-signature-offset

**Get position of [PE](https://en.wikipedia.org/wiki/Portable_Executable) signature. As specified by [Microsoft PE and COFF Specification 9.3](https://download.microsoft.com/download/9/c/5/9c5b2167-8017-4bae-9fde-d599bac8184a/pecoff_v83.docx) <sup>[doc]</sup>, section 3.2:**

> After the MS-DOS stub, at the file offset specified at offset `0x3c`, is a 4-byte signature that identifies the file as a PE format image file. This signature is `PE\0\0` (the letters "P" and "E" followed by two null bytes).

[![npm status](http://img.shields.io/npm/v/pe-signature-offset.svg?style=flat-square)](https://www.npmjs.org/package/pe-signature-offset) [![node](https://img.shields.io/node/v/pe-signature-offset.svg?style=flat-square)](https://www.npmjs.org/package/pe-signature-offset) [![Travis build status](https://img.shields.io/travis/vweevers/pe-signature-offset.svg?style=flat-square&label=travis)](http://travis-ci.org/vweevers/pe-signature-offset) [![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/pe-signature-offset.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/vweevers/pe-signature-offset) [![Dependency status](https://img.shields.io/david/vweevers/pe-signature-offset.svg?style=flat-square)](https://david-dm.org/vweevers/pe-signature-offset) [![Greenkeeper badge](https://badges.greenkeeper.io/vweevers/pe-signature-offset.svg)](https://greenkeeper.io/)

## example

```js
const getOffset = require('pe-signature-offset')

getOffset('file.exe', function (err, offset) {
  console.log(offset)
})
```

## `getOffset(mixed, callback)`

Where `mixed` is either a filename or a file descriptor.

## related

- [pe-signature](https://github.com/vweevers/pe-signature)

## install

With [npm](https://npmjs.org) do:

```
npm install pe-signature-offset
```

## license

[MIT](http://opensource.org/licenses/MIT) © Vincent Weevers
