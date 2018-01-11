'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _nl_NL = require('rc-pagination/lib/locale/nl_NL');

var _nl_NL2 = _interopRequireDefault(_nl_NL);

var _nl_NL3 = require('../date-picker/locale/nl_NL');

var _nl_NL4 = _interopRequireDefault(_nl_NL3);

var _nl_NL5 = require('../time-picker/locale/nl_NL');

var _nl_NL6 = _interopRequireDefault(_nl_NL5);

var _nl_NL7 = require('../calendar/locale/nl_NL');

var _nl_NL8 = _interopRequireDefault(_nl_NL7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

moment.locale('nl');
exports['default'] = {
    locale: 'nl',
    Pagination: _nl_NL2['default'],
    DatePicker: _nl_NL4['default'],
    TimePicker: _nl_NL6['default'],
    Calendar: _nl_NL8['default'],
    Table: {
        filterTitle: 'Filteren',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'Geen gegevens',
        selectAll: 'Selecteer huidige pagina',
        selectInvert: 'Deselecteer huidige pagina'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuleren',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuleren'
    },
    Transfer: {
        notFoundContent: 'Niet gevonden',
        searchPlaceholder: 'Zoeken',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Niet gevonden'
    },
    Upload: {
        uploading: 'Uploaden...',
        removeFile: 'Verwijder bestand',
        uploadError: 'Fout tijdens uploaden',
        previewFile: 'Bekijk bestand'
    }
};
module.exports = exports['default'];