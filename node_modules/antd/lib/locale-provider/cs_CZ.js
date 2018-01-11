'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _cs_CZ = require('rc-pagination/lib/locale/cs_CZ');

var _cs_CZ2 = _interopRequireDefault(_cs_CZ);

var _cs_CZ3 = require('../date-picker/locale/cs_CZ');

var _cs_CZ4 = _interopRequireDefault(_cs_CZ3);

var _cs_CZ5 = require('../time-picker/locale/cs_CZ');

var _cs_CZ6 = _interopRequireDefault(_cs_CZ5);

var _cs_CZ7 = require('../calendar/locale/cs_CZ');

var _cs_CZ8 = _interopRequireDefault(_cs_CZ7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

moment.locale('cs');
exports['default'] = {
    locale: 'cs',
    Pagination: _cs_CZ2['default'],
    DatePicker: _cs_CZ4['default'],
    TimePicker: _cs_CZ6['default'],
    Calendar: _cs_CZ8['default'],
    Table: {
        filterTitle: 'Filtr',
        filterConfirm: 'Potvrdit',
        filterReset: 'Obnovit',
        emptyText: 'Žádná data'
    },
    Modal: {
        okText: 'Ok',
        cancelText: 'Storno',
        justOkText: 'Ok'
    },
    Popconfirm: {
        okText: 'Ok',
        cancelText: 'Storno'
    },
    Transfer: {
        notFoundContent: 'Nenalezeno',
        searchPlaceholder: 'Vyhledávání',
        itemUnit: 'položka',
        itemsUnit: 'položek'
    },
    Select: {
        notFoundContent: 'Nenalezeno'
    },
    Upload: {
        uploading: 'Nahrávání...',
        removeFile: 'Odstranit soubor',
        uploadError: 'Chyba při nahrávání',
        previewFile: 'Zobrazit soubor'
    }
};
module.exports = exports['default'];