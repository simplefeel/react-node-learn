'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _nl_BE = require('rc-pagination/lib/locale/nl_BE');

var _nl_BE2 = _interopRequireDefault(_nl_BE);

var _nl_BE3 = require('../date-picker/locale/nl_BE');

var _nl_BE4 = _interopRequireDefault(_nl_BE3);

var _nl_BE5 = require('../time-picker/locale/nl_BE');

var _nl_BE6 = _interopRequireDefault(_nl_BE5);

var _nl_BE7 = require('../calendar/locale/nl_BE');

var _nl_BE8 = _interopRequireDefault(_nl_BE7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

moment.locale('nl-be');
exports['default'] = {
    locale: 'nl-be',
    Pagination: _nl_BE2['default'],
    DatePicker: _nl_BE4['default'],
    TimePicker: _nl_BE6['default'],
    Calendar: _nl_BE8['default'],
    Table: {
        filterTitle: 'FilterMenu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'Geen gegevens',
        selectAll: 'Selecteer huidige pagina',
        selectInvert: 'Selecteer huidige pagina'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuleer',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuleer'
    },
    Transfer: {
        notFoundContent: 'Niet gevonden',
        searchPlaceholder: 'Zoek hier',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Niet gevonden'
    },
    Upload: {
        uploading: 'Uploaden...',
        removeFile: 'Bestand verwijderen',
        uploadError: 'Upload fout',
        previewFile: 'Preview bestand'
    }
};
module.exports = exports['default'];