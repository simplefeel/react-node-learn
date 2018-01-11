/// <reference types="react" />
import * as React from 'react';
import { RadioGroupProps, RadioGroupState } from './interface';
export default class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
    static defaultProps: {
        disabled: boolean;
    };
    static childContextTypes: {
        radioGroup: any;
    };
    constructor(props: RadioGroupProps);
    getChildContext(): {
        radioGroup: {
            onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
            value: any;
            disabled: boolean | undefined;
            name: string | undefined;
        };
    };
    componentWillReceiveProps(nextProps: RadioGroupProps): void;
    shouldComponentUpdate(nextProps: RadioGroupProps, nextState: RadioGroupState): boolean;
    onRadioChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
