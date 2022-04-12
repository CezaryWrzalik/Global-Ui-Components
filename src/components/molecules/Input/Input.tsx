import React from "react";
import { InputProps } from "@@types/Inputs";
import { InputWrapper, LabelWrapper } from "./Input.styled";
import { Label } from "@atoms/Label/Label";
import { BaseInput } from "@atoms/BaseInput/BaseInput";
import { InputMessage } from "@molecules/InputMessage/InputMessage";

export interface InputProps extends InputProps.Default {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }, ref) => {
    const isError = rest.error && !!rest.errorMessage;

    return (
      <>
        <InputWrapper>
          <LabelWrapper>{label && <Label>{label}</Label>}</LabelWrapper>
          <BaseInput ref={ref} {...rest} />
          {isError && rest.errorMessage && (
            <InputMessage>
              {rest.errorMessage}
            </InputMessage>
          )}
        </InputWrapper>
      </>
    );
  }
);
