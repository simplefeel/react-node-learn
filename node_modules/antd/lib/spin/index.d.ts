/// <reference types="react" />
import * as React from 'react';
export interface SpinProps {
    prefixCls?: string;
    className?: string;
    spinning?: boolean;
    style?: React.CSSProperties;
    size?: 'small' | 'default' | 'large';
    tip?: string;
    delay?: number;
    wrapperClassName?: string;
    indicator?: React.ReactNode;
}
export interface SpinState {
    spinning?: boolean;
    notCssAnimationSupported?: boolean;
}
export default class Spin extends React.Component<SpinProps, SpinState> {
    static defaultProps: {
        prefixCls: string;
        spinning: boolean;
        size: string;
        wrapperClassName: string;
    };
    static propTypes: {
        prefixCls: any;
        className: any;
        spinning: any;
        size: any;
        wrapperClassName: any;
        indicator: any;
    };
    debounceTimeout: number;
    delayTimeout: number;
    constructor(props: SpinProps);
    isNestedPattern(): boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: SpinProps): void;
    render(): JSX.Element;
}
