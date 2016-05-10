# observ-hashtory [![Build Status](https://travis-ci.org/ajoslin/observ-hashtory.svg?branch=master)](https://travis-ci.org/ajoslin/observ-hashtory)

> Observable interface to the browser hash location


## Install

```
$ npm install --save observ-location-hash
```

## Usage

```js
var observHash = require('observ-location-hash')

observHash(function (hash) {
  //=> (called on window's hashchange event)
})

observHash()
//=> returns current hash, minus '#' character

observHash.set(path)
//=> sets current hash
```

## API

#### `observHash([listener])` -> `function`

Returns an unlisten function.

##### listener

Type: `function`

A function to call with the current path when the hash changes.

#### `observHash.set(path)` -> `undefined`

Updates window.locaion.hash.

## Related

- [observ-history](https://github.com/bendrucker/observ-history)

## License

MIT © [Andrew Joslin](http://ajoslin.com)
