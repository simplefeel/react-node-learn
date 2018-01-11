'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = require('./default');

var _default2 = _interopRequireDefault(_default);

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

moment.locale('en');
exports['default'] = _default2['default'];
module.exports = exports['default'];