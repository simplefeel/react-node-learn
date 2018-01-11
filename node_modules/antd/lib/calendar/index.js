'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _FullCalendar = require('rc-calendar/lib/FullCalendar');

var _FullCalendar2 = _interopRequireDefault(_FullCalendar);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _Constants = require('./Constants');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _callMoment = require('../_util/callMoment');

var _callMoment2 = _interopRequireDefault(_callMoment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {
    return null;
}
function zerofixed(v) {
    if (v < 10) {
        return '0' + v;
    }
    return '' + v;
}

var Calendar = function (_React$Component) {
    (0, _inherits3['default'])(Calendar, _React$Component);

    function Calendar(props) {
        (0, _classCallCheck3['default'])(this, Calendar);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

        _this.monthCellRender = function (value) {
            var _this$props = _this.props,
                prefixCls = _this$props.prefixCls,
                _this$props$monthCell = _this$props.monthCellRender,
                monthCellRender = _this$props$monthCell === undefined ? noop : _this$props$monthCell;

            return React.createElement(
                'div',
                { className: prefixCls + '-month' },
                React.createElement(
                    'div',
                    { className: prefixCls + '-value' },
                    value.localeData().monthsShort(value)
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    monthCellRender(value)
                )
            );
        };
        _this.dateCellRender = function (value) {
            var _this$props2 = _this.props,
                prefixCls = _this$props2.prefixCls,
                _this$props2$dateCell = _this$props2.dateCellRender,
                dateCellRender = _this$props2$dateCell === undefined ? noop : _this$props2$dateCell;

            return React.createElement(
                'div',
                { className: prefixCls + '-date' },
                React.createElement(
                    'div',
                    { className: prefixCls + '-value' },
                    zerofixed(value.date())
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    dateCellRender(value)
                )
            );
        };
        _this.setValue = function (value, way) {
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            if (way === 'select') {
                if (_this.props.onSelect) {
                    _this.props.onSelect(value);
                }
            } else if (way === 'changePanel') {
                _this.onPanelChange(value, _this.state.mode);
            }
        };
        _this.setType = function (type) {
            var mode = type === 'date' ? 'month' : 'year';
            if (_this.state.mode !== mode) {
                _this.setState({ mode: mode });
                _this.onPanelChange(_this.state.value, mode);
            }
        };
        _this.onHeaderValueChange = function (value) {
            _this.setValue(value, 'changePanel');
        };
        _this.onHeaderTypeChange = function (type) {
            _this.setType(type);
        };
        _this.onSelect = function (value) {
            _this.setValue(value, 'select');
        };
        _this.renderCalendar = function (locale, localeCode) {
            var state = _this.state,
                props = _this.props;
            var value = state.value,
                mode = state.mode;

            if (value && localeCode) {
                value.locale(localeCode);
            }
            var prefixCls = props.prefixCls,
                style = props.style,
                className = props.className,
                fullscreen = props.fullscreen,
                dateFullCellRender = props.dateFullCellRender,
                monthFullCellRender = props.monthFullCellRender;

            var type = mode === 'year' ? 'month' : 'date';
            var cls = className || '';
            if (fullscreen) {
                cls += ' ' + prefixCls + '-fullscreen';
            }
            var monthCellRender = monthFullCellRender || _this.monthCellRender;
            var dateCellRender = dateFullCellRender || _this.dateCellRender;
            return React.createElement(
                'div',
                { className: cls, style: style },
                React.createElement(_Header2['default'], { fullscreen: fullscreen, type: type, value: value, locale: locale.lang, prefixCls: prefixCls, onTypeChange: _this.onHeaderTypeChange, onValueChange: _this.onHeaderValueChange }),
                React.createElement(_FullCalendar2['default'], (0, _extends3['default'])({}, props, { Select: noop, locale: locale.lang, type: type, prefixCls: prefixCls, showHeader: false, value: value, monthCellRender: monthCellRender, dateCellRender: dateCellRender, onSelect: _this.onSelect }))
            );
        };
        var value = props.value || props.defaultValue || (0, _callMoment2['default'])(moment);
        if (!moment.isMoment(value)) {
            throw new Error('The value/defaultValue of Calendar must be a moment object after `antd@2.0`, ' + 'see: https://u.ant.design/calendar-value');
        }
        _this.state = {
            value: value,
            mode: props.mode
        };
        return _this;
    }

    (0, _createClass3['default'])(Calendar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'getDefaultLocale',
        value: function getDefaultLocale() {
            var locale = require('./locale/en_US');
            return locale['default'] || locale;
        }
    }, {
        key: 'onPanelChange',
        value: function onPanelChange(value, mode) {
            var onPanelChange = this.props.onPanelChange;

            if (onPanelChange) {
                onPanelChange(value, mode);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                _LocaleReceiver2['default'],
                { componentName: 'Calendar', defaultLocale: this.getDefaultLocale },
                this.renderCalendar
            );
        }
    }]);
    return Calendar;
}(React.Component);

exports['default'] = Calendar;

Calendar.defaultProps = {
    locale: {},
    fullscreen: true,
    prefixCls: _Constants.PREFIX_CLS,
    mode: 'month',
    onSelect: noop,
    onPanelChange: noop
};
Calendar.propTypes = {
    monthCellRender: _propTypes2['default'].func,
    dateCellRender: _propTypes2['default'].func,
    monthFullCellRender: _propTypes2['default'].func,
    dateFullCellRender: _propTypes2['default'].func,
    fullscreen: _propTypes2['default'].bool,
    locale: _propTypes2['default'].object,
    prefixCls: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    style: _propTypes2['default'].object,
    onPanelChange: _propTypes2['default'].func,
    value: _propTypes2['default'].object,
    onSelect: _propTypes2['default'].func
};
module.exports = exports['default'];