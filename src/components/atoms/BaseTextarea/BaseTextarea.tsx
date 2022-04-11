import React, { TextareaHTMLAttributes } from "react";
import { BaseTextarea } from "./BaseTextarea.styled";

export interface SingleTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isResize?: boolean;
}

export const SingleTextarea = React.forwardRef<
  HTMLTextAreaElement,
  SingleTextareaProps
>(({ isResize = true, ...rest }, ref) => {
  return <BaseTextarea isResize={isResize} ref={ref} {...rest} />;
});
