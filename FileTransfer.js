/**
 * @providesModule FileTransfer
 */

'use strict';

var { NativeModules } = require('react-native');

class FileTransfer {
  constructor() {
  }

  static getRealPathFromUri(uri, callback) {
    NativeModules.FileTransfer.getRealPathFromUri(uri, callback);
  }

  static show(message) {
    NativeModules.FileTransfer.show(message);
  }

  static upload(opts, callback) {
    NativeModules.FileTransfer.upload(opts, callback);
  }
}

module.exports = FileTransfer;
