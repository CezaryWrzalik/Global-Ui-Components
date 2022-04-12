import React from "react";
import {  InputWrapper, LabelWrapper } from "@molecules/Input/Input.styled";
import { Label } from "@atoms/Label/Label";
import { BaseTextarea, SingleTextareaProps } from "@atoms/BaseTextarea/BaseTextarea";

export interface TextareaProps extends SingleTextareaProps {
	label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...rest }, ref) => {

    return (
      <>
        <InputWrapper>
          <LabelWrapper>{label && <Label>{label}</Label>}</LabelWrapper>
          <BaseTextarea ref={ref} {...rest} />
        </InputWrapper>
      </>
    );
  }
);