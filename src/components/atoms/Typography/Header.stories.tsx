import { Meta } from '@storybook/react/types-6-0';
import { Typography } from './Typography';
import { TypographyProps } from '@@types/Typography';

export default {
    title: 'Atoms/Typography/Headers',
    component: Typography.TextH1_96,
    description: `DESC`,
} as Meta;

export const TextH1_96 = (args: TypographyProps.Header) => (
	<Typography.TextH1_96 {...args} />
);

export const TextH1_64 = (args: TypographyProps.Header) => (
	<Typography.TextH1_64 {...args} />
);

export const TextH2_24 = (args: TypographyProps.Header) => (
	<Typography.TextH2_24 {...args} />
);

export const TextH2_24_15 = (args: TypographyProps.Header) => (
	<Typography.TextH2_24_15 {...args} />
);

export const TextH3_20 = (args: TypographyProps.Header) => (
	<Typography.TextH3_20 {...args} />
);

TextH1_96.args = {
	children: 'H1 Open Sans 96px',
};

TextH1_64.args = {
    children: 'H1 Open Sans 64px',
};

TextH2_24.args = {
	children: 'H2 Open Sans 24px',
};

TextH2_24_15.args = {
	children: 'H2 Open Sans 24px Letter Spacing 15',
};

TextH3_20.args = {
	children: 'H3 Open Sans 20px',
};

