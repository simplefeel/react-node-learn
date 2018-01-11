'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _th_TH = require('rc-pagination/lib/locale/th_TH');

var _th_TH2 = _interopRequireDefault(_th_TH);

var _th_TH3 = require('../date-picker/locale/th_TH');

var _th_TH4 = _interopRequireDefault(_th_TH3);

var _th_TH5 = require('../time-picker/locale/th_TH');

var _th_TH6 = _interopRequireDefault(_th_TH5);

var _th_TH7 = require('../calendar/locale/th_TH');

var _th_TH8 = _interopRequireDefault(_th_TH7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

moment.locale('th');
exports['default'] = {
    locale: 'th',
    Pagination: _th_TH2['default'],
    DatePicker: _th_TH4['default'],
    TimePicker: _th_TH6['default'],
    Calendar: _th_TH8['default'],
    Table: {
        filterTitle: 'ตัวกรอง',
        filterConfirm: 'ยืนยัน',
        filterReset: 'รีเซ็ต',
        emptyText: 'ไม่มีข้อมูล',
        selectAll: 'เลือกทั้งหมดในหน้านี้',
        selectInvert: 'เลือกสถานะตรงกันข้าม'
    },
    Modal: {
        okText: 'ตกลง',
        cancelText: 'ยกเลิก',
        justOkText: 'ตกลง'
    },
    Popconfirm: {
        okText: 'ตกลง',
        cancelText: 'ยกเลิก'
    },
    Transfer: {
        notFoundContent: 'ไม่พบข้อมูล',
        searchPlaceholder: 'ค้นหา',
        itemUnit: 'ชิ้น',
        itemsUnit: 'ชิ้น'
    },
    Select: {
        notFoundContent: 'ไม่พบข้อมูล'
    },
    Upload: {
        uploading: 'กำลังอัปโหลด...',
        removeFile: 'ลบไฟล์',
        uploadError: 'เกิดข้อผิดพลาดในการอัปโหลด',
        previewFile: 'ดูตัวอย่างไฟล์'
    }
};
module.exports = exports['default'];