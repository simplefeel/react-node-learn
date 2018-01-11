/// <reference types="react" />
import * as React from 'react';
import * as moment from 'moment';
import { TimePickerProps } from '../time-picker';
export interface PickerProps {
    prefixCls?: string;
    inputPrefixCls?: string;
    format?: string;
    disabled?: boolean;
    allowClear?: boolean;
    className?: string;
    style?: React.CSSProperties;
    popupStyle?: React.CSSProperties;
    locale?: any;
    size?: 'large' | 'small' | 'default';
    getCalendarContainer?: (triggerNode: Element) => HTMLElement;
    open?: boolean;
    onOpenChange?: (status: boolean) => void;
    disabledDate?: (current: moment.Moment) => boolean;
    renderExtraFooter?: () => React.ReactNode;
    dateRender?: (current: moment.Moment, today: moment.Moment) => React.ReactNode;
}
export interface SinglePickerProps {
    value?: moment.Moment;
    defaultValue?: moment.Moment;
    defaultPickerValue?: moment.Moment;
    onChange?: (date: moment.Moment, dateString: string) => void;
}
export interface DatePickerProps extends PickerProps, SinglePickerProps {
    className?: string;
    showTime?: TimePickerProps | boolean;
    showToday?: boolean;
    open?: boolean;
    disabledTime?: (current: moment.Moment) => {
        disabledHours?: () => number[];
        disabledMinutes?: () => number[];
        disabledSeconds?: () => number[];
    };
    onOpenChange?: (status: boolean) => void;
    onOk?: (selectedTime: moment.Moment) => void;
    placeholder?: string;
}
export interface MonthPickerProps extends PickerProps, SinglePickerProps {
    className?: string;
    placeholder?: string;
}
export interface RangePickerProps extends PickerProps {
    className?: string;
    value?: [moment.Moment, moment.Moment];
    defaultValue?: [moment.Moment, moment.Moment];
    defaultPickerValue?: [moment.Moment, moment.Moment];
    onChange?: (dates: [moment.Moment, moment.Moment], dateStrings: [string, string]) => void;
    onCalendarChange?: (dates: [moment.Moment, moment.Moment], dateStrings: [string, string]) => void;
    onOk?: (selectedTime: moment.Moment) => void;
    showTime?: TimePickerProps | boolean;
    ranges?: {
        [range: string]: moment.Moment[];
    };
    placeholder?: [string, string];
    mode?: string | string[];
    disabledTime?: (current: moment.Moment, type: string) => {
        disabledHours?: () => number[];
        disabledMinutes?: () => number[];
        disabledSeconds?: () => number[];
    };
    onPanelChange?: (value?: moment.Moment[], mode?: string | string[]) => void;
}
export interface WeexPickerProps extends PickerProps, SinglePickerProps {
    className?: string;
    placeholder?: string;
}
export interface DatePickerDecorator extends React.ClassicComponentClass<DatePickerProps> {
    RangePicker: React.ClassicComponentClass<RangePickerProps>;
    MonthPicker: React.ClassicComponentClass<MonthPickerProps>;
    WeekPicker: React.ClassicComponentClass<WeexPickerProps>;
}
declare const _default: DatePickerDecorator;
export default _default;
