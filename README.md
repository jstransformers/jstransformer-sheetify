# jstransformer-sheetify

[Sheetify](https://github.com/sheetify/sheetify) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-sheetify/master.svg)](https://travis-ci.org/jstransformers/jstransformer-sheetify)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-sheetify/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-sheetify)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-sheetify/master.svg)](http://david-dm.org/jstransformers/jstransformer-sheetify)

[![NPM version](https://img.shields.io/npm/v/jstransformer-sheetify.svg)](https://www.npmjs.org/package/jstransformer-sheetify)

## Installation

    npm install jstransformer-sheetify

## API

```js
var sheetify = require('jstransformer')(require('jstransformer-sheetify'))

sheetify.renderFile('./index.css').body
//=> concatenated/bundled css
```

## License

MIT
