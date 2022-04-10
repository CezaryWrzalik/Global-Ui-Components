import React, { InputHTMLAttributes } from 'react';
import { BaseInputElement } from './BaseInput.styled';

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}
export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
    ({ ...rest }: BaseInputProps, ref) => {
        return <BaseInputElement {...rest} ref={ref} />;
    },
);