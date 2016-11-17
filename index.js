'use strict';

var sheetify = require('sheetify');

exports.name = 'sheetify';
exports.outputFormat = 'css';

exports.renderFileAsync = function (fp, options) {
  return new Promise(function (resolve, reject) {
    sheetify(fp).bundle(options || {}, function (err, res) {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};
