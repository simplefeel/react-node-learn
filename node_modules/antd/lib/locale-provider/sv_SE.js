'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _sv_SE = require('rc-pagination/lib/locale/sv_SE');

var _sv_SE2 = _interopRequireDefault(_sv_SE);

var _sv_SE3 = require('../date-picker/locale/sv_SE');

var _sv_SE4 = _interopRequireDefault(_sv_SE3);

var _sv_SE5 = require('../time-picker/locale/sv_SE');

var _sv_SE6 = _interopRequireDefault(_sv_SE5);

var _sv_SE7 = require('../calendar/locale/sv_SE');

var _sv_SE8 = _interopRequireDefault(_sv_SE7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

moment.locale('sv');
exports['default'] = {
    locale: 'sv',
    Pagination: _sv_SE2['default'],
    DatePicker: _sv_SE4['default'],
    TimePicker: _sv_SE6['default'],
    Calendar: _sv_SE8['default'],
    Table: {
        filterTitle: 'Filtermeny',
        filterConfirm: 'OK',
        filterReset: 'Rensa',
        emptyText: 'Ingen information'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Avbryt',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Avbryt'
    },
    Transfer: {
        notFoundContent: 'Info saknas',
        searchPlaceholder: 'Sök',
        itemUnit: 'element',
        itemsUnit: 'element'
    },
    Select: {
        notFoundContent: 'Info saknas'
    }
};
module.exports = exports['default'];