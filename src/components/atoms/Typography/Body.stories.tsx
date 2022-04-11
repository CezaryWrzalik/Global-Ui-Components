import { Meta } from '@storybook/react/types-6-0';
import { Typography } from './Typography';
import { TypographyProps } from '@@types/Typography';

export default {
    title: 'Atoms/Typography/Body',
    component: Typography.TextBody_16,
    description: `DESC`,
    argTypes: {
        bold: {
            control: 'boolean',
            defaultValue: false,
        }
    }
} as Meta;

export const TextBody_16 = (args: TypographyProps.Body) => (
    <Typography.TextBody_16 {...args} />
);

TextBody_16.args = {
    children: 'Body Open Sans 16px',
};

