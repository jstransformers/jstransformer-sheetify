'use strict';

var sheetify = require('sheetify');
var Bluebird = require('bluebird');
var isObject = require('is-real-object');

exports.name = 'sheetify';
exports.inputFormats = ['sheetify', 'css'];
exports.outputFormat = 'css';

exports.renderFileAsync = function (fp, options) {
  options = isObject(options) ? options : {};
  return new Bluebird(function (resolve, reject) {
    sheetify(fp).bundle(options, function (err, res) {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};
