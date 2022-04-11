import styled, { css } from 'styled-components';

export const LabelWrapper = styled.label(
    ({ theme: { colors, fontSizes } }) => css`
        color: ${colors.text.primary};
        cursor: auto;
        font-size: ${fontSizes[20]}px;
    `,
);
