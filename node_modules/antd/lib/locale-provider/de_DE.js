'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _de_DE = require('rc-pagination/lib/locale/de_DE');

var _de_DE2 = _interopRequireDefault(_de_DE);

var _de_DE3 = require('../date-picker/locale/de_DE');

var _de_DE4 = _interopRequireDefault(_de_DE3);

var _de_DE5 = require('../time-picker/locale/de_DE');

var _de_DE6 = _interopRequireDefault(_de_DE5);

var _de_DE7 = require('../calendar/locale/de_DE');

var _de_DE8 = _interopRequireDefault(_de_DE7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

moment.locale('de');
exports['default'] = {
    locale: 'de',
    Pagination: _de_DE2['default'],
    DatePicker: _de_DE4['default'],
    TimePicker: _de_DE6['default'],
    Calendar: _de_DE8['default'],
    Table: {
        filterTitle: 'Filter-Menü',
        filterConfirm: 'OK',
        filterReset: 'Zurücksetzen',
        emptyText: 'Keine Daten',
        selectAll: 'Selektiere Alle',
        selectInvert: 'Selektion Invertieren'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Abbrechen',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Abbrechen'
    },
    Transfer: {
        notFoundContent: 'Nicht gefunden',
        searchPlaceholder: 'Suchen',
        itemUnit: 'Eintrag',
        itemsUnit: 'Einträge'
    },
    Select: {
        notFoundContent: 'Nicht gefunden'
    },
    Upload: {
        uploading: 'Hochladen...',
        removeFile: 'Datei entfernen',
        uploadError: 'Fehler beim Hochladen',
        previewFile: 'Dateivorschau'
    }
};
module.exports = exports['default'];