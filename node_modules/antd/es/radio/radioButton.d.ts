/// <reference types="react" />
import * as React from 'react';
import { AbstractCheckboxProps } from '../checkbox/Checkbox';
export declare type RadioButtonProps = AbstractCheckboxProps;
export default class RadioButton extends React.Component<RadioButtonProps, any> {
    static defaultProps: {
        prefixCls: string;
    };
    static contextTypes: {
        radioGroup: any;
    };
    render(): JSX.Element;
}
