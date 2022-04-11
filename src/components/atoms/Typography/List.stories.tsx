import { Meta } from '@storybook/react/types-6-0';
import { Typography } from './Typography';
import { TypographyProps } from '@@types/Typography';

export default {
    title: 'Typography/List',
    component: Typography.TextBullet_16,
    description: `DESC`,
    argTypes: {
			marks: {
				control: 'boolean',
				defaultValue: true,
		}
		},
} as Meta;

export const TextBullet_20 = (args: TypographyProps.List) => (
	<Typography.TextBullet_20 {...args} />
);

export const TextBullet_16 = (args: TypographyProps.List) => (
    <Typography.TextBullet_16 {...args} />
);

TextBullet_20.args = {
	children: 'Bullets 20',
};

TextBullet_20.parameters = {
	controls: { exclude: ['marks'] }
}

TextBullet_16.args = {
    children: 'Bullets 16',
};
