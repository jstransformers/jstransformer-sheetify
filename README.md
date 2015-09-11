# jstransformer-sheetify [![The MIT License][license-img]][license-url]

[Sheetify](https://github.com/sheetify/sheetify) support for [JSTransformers][jstransformers-url]

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-sheetify --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var sheetify = require('jstransformer')(require('jstransformer-sheetify'));

sheetify.renderFile('./index.css').body
//=> concatenated/bundled css
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-sheetify/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-sheetify
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-sheetify.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-sheetify
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-sheetify.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-sheetify
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-sheetify.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-sheetify
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-sheetify.svg

[jstransformers-url]: http://github.com/jstransformers
