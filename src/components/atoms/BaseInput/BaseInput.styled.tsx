import { breakpoints } from "@shared/constants";
import styled, { css } from "styled-components";

const commonInputStyles = css(
  ({ theme: { colors, fontSizes, radius } }) => `
    caret-color: ${colors.input.textPrimary};
    color: ${colors.input.textPrimary};
    border: 2px solid ${colors.input.borderPrimary};
    border-radius: ${radius[5]}px;
    background-color: inherit;
    height: 51px;
    line-height: 1.3;
    outline: none;
    width: 100%;
    padding: 0 15px;
    font-size: ${fontSizes[16]};

    @media (max-width: ${breakpoints.sm}px) {
        font-size: ${fontSizes[14]}px;
    }
    `
);

const inputPlaceholder = css(
  ({ theme: { colors } }) => `
  ::placeholder,
  ::-webkit-input-placeholder {
      color: ${colors.input.primaryPlaceholder};
    }
      `
);

export const BaseInputElement = styled.input(
  () => css`
  ${commonInputStyles}
  ${inputPlaceholder}
  `
);
