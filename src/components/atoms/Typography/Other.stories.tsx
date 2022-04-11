import { Meta } from '@storybook/react/types-6-0';
import { Typography } from './Typography';
import { TypographyProps } from '@@types/Typography';

export default {
    title: 'Atoms/Typography/Others',
    component: Typography.TextDyanmicColor,
    description: `DESC`,
    argTypes: {},
} as Meta;

export const TextDyanmicColor = (args: TypographyProps.Body) => (
    <Typography.TextDyanmicColor {...args} />
);

TextDyanmicColor.args = {
    children: 'Dynamic Color',
};