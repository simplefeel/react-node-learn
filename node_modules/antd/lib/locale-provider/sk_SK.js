'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _sk_SK = require('rc-pagination/lib/locale/sk_SK');

var _sk_SK2 = _interopRequireDefault(_sk_SK);

var _sk_SK3 = require('../date-picker/locale/sk_SK');

var _sk_SK4 = _interopRequireDefault(_sk_SK3);

var _sk_SK5 = require('../time-picker/locale/sk_SK');

var _sk_SK6 = _interopRequireDefault(_sk_SK5);

var _sk_SK7 = require('../calendar/locale/sk_SK');

var _sk_SK8 = _interopRequireDefault(_sk_SK7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

moment.locale('sk');
exports['default'] = {
    locale: 'sk',
    Pagination: _sk_SK2['default'],
    DatePicker: _sk_SK4['default'],
    TimePicker: _sk_SK6['default'],
    Calendar: _sk_SK8['default'],
    Table: {
        filterTitle: 'Filter',
        filterConfirm: 'OK',
        filterReset: 'Obnoviť',
        emptyText: 'Žiadne dáta',
        selectAll: 'Vybrať všetko',
        selectInvert: 'Vybrať opačné'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Zrušiť',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Zrušiť'
    },
    Transfer: {
        notFoundContent: 'Nenájdené',
        searchPlaceholder: 'Vyhľadávanie',
        itemUnit: 'položka',
        itemsUnit: 'položiek'
    },
    Select: {
        notFoundContent: 'Nenájdené'
    },
    Upload: {
        uploading: 'Nahrávanie...',
        removeFile: 'Odstrániť súbor',
        uploadError: 'Chyba pri nahrávaní',
        previewFile: 'Zobraziť súbor'
    }
};
module.exports = exports['default'];