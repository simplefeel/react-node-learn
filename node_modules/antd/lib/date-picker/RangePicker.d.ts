/// <reference types="react" />
import * as React from 'react';
import * as moment from 'moment';
export declare type RangePickerValue = moment.Moment[];
export interface RangePickerState {
    value?: RangePickerValue;
    showDate?: RangePickerValue;
    open?: boolean;
    hoverValue?: RangePickerValue;
}
export default class RangePicker extends React.Component<any, RangePickerState> {
    static defaultProps: {
        prefixCls: string;
        allowClear: boolean;
        showToday: boolean;
    };
    private picker;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    clearSelection: (e: React.MouseEvent<HTMLElement>) => void;
    clearHoverValue: () => void;
    handleChange: (value: moment.Moment[]) => void;
    handleOpenChange: (open: boolean) => void;
    handleShowDateChange: (showDate: moment.Moment[]) => void;
    handleHoverChange: (hoverValue: any) => void;
    setValue(value: moment.Moment[], hidePanel?: boolean): void;
    focus(): void;
    blur(): void;
    savePicker: (node: HTMLSpanElement) => void;
    renderFooter: (...args: any[]) => (JSX.Element | null)[] | null;
    render(): JSX.Element;
}
