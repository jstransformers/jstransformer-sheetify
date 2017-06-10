'use strict'

const sheetify = require('sheetify')

exports.name = 'sheetify'
exports.outputFormat = 'css'

exports.renderFileAsync = function (fp, options) {
  return new Promise((resolve, reject) => {
    sheetify(fp).bundle(options || {}, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}
