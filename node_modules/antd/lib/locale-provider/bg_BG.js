'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _bg_BG = require('rc-pagination/lib/locale/bg_BG');

var _bg_BG2 = _interopRequireDefault(_bg_BG);

var _bg_BG3 = require('../date-picker/locale/bg_BG');

var _bg_BG4 = _interopRequireDefault(_bg_BG3);

var _bg_BG5 = require('../time-picker/locale/bg_BG');

var _bg_BG6 = _interopRequireDefault(_bg_BG5);

var _bg_BG7 = require('../calendar/locale/bg_BG');

var _bg_BG8 = _interopRequireDefault(_bg_BG7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

moment.locale('bg');
exports['default'] = {
    locale: 'bg',
    Pagination: _bg_BG2['default'],
    DatePicker: _bg_BG4['default'],
    TimePicker: _bg_BG6['default'],
    Calendar: _bg_BG8['default'],
    Table: {
        filterTitle: 'Филтриране',
        filterConfirm: 'Добре',
        filterReset: 'Нулриане',
        emptyText: 'Няма данни',
        selectAll: 'Избор на текуща страница',
        selectInvert: 'Обръщане'
    },
    Modal: {
        okText: 'Добре',
        cancelText: 'Отказ',
        justOkText: 'Добре'
    },
    Popconfirm: {
        okText: 'Добре',
        cancelText: 'Отказ'
    },
    Transfer: {
        notFoundContent: 'Няма намерени',
        searchPlaceholder: 'Търсене',
        itemUnit: 'избор',
        itemsUnit: 'избори'
    },
    Select: {
        notFoundContent: 'Няма намерени'
    },
    Upload: {
        uploading: 'Качване...',
        removeFile: 'Премахване',
        uploadError: 'Грешка при качването',
        previewFile: 'Преглед'
    }
};
module.exports = exports['default'];