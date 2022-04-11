import { Meta } from '@storybook/react/types-6-0';
import { Typography } from './Typography';
import { TypographyProps } from '@@types/Typography';

export default {
    title: 'Atoms/Typography/Buttons',
    component: Typography.TextButton_16,
    description: `DESC`,
    argTypes: {},
} as Meta;

export const TextButton_16 = (args: TypographyProps.Button) => (
    <Typography.TextButton_16 {...args} />
);

TextButton_16.args = {
    children: 'Button Open Sans 16',
};
