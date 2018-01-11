/// <reference types="react" />
import * as React from 'react';
export interface DividerProps {
    prefixCls?: string;
    type?: 'horizontal' | 'vertical';
    className?: string;
    children?: React.ReactNode;
    dashed?: boolean;
    style?: React.CSSProperties;
}
export default function Divider({prefixCls, type, className, children, dashed, ...restProps}: DividerProps): JSX.Element;
