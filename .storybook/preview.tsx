import { Story } from '@storybook/react';
import defaultTheme from '../src/shared/theme/default.theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from '../src/shared/styles/GlobalStyles.styled';

export const decorators = [
    (Story: Story) => (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyled />
            <Story />
        </ThemeProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
