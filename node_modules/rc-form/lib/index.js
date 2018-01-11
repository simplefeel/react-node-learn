'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFormField = exports.createForm = undefined;

var _createForm = require('./createForm');

var _createForm2 = _interopRequireDefault(_createForm);

var _createFormField = require('./createFormField');

var _createFormField2 = _interopRequireDefault(_createFormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// export this package's api
exports.createForm = _createForm2['default'];
exports.createFormField = _createFormField2['default'];