import { colorMapping } from '@utils/colorMapping';
import { ComponentMeta } from '@storybook/react';
import defaultTheme  from '@shared/theme/default.theme';
import { Story } from '@storybook/react/types-6-0';
import * as Icons from '@shared/svgs';
import {
    IconManager,
    IIconManagerProps,
} from './IconManager';

export default {
    title: 'Molecules/Icon Manager',
    component: IconManager,
    description: `DESC`,
    argTypes: {
        name: {
            control: 'select',
            defaultValue: 'IconArrow',
            options: Object.keys(Icons),
        },
        size: {
            control: 'number',
            defaultValue: 24,
        },
        fill: {
            control: 'select',
            defaultValue: ['primary'],
            mapping: colorMapping(),
            options: Object.keys(defaultTheme.colors.icons),
        },
        rotate: {
            control: 'number',
            defaultValue: 0,
        },
        center: { control: 'boolean', defaultValue: true },
        isActive: { control: 'boolean', defaultValue: true },
    },
} as ComponentMeta<typeof IconManager>;

const Template: Story<IIconManagerProps> = (args) => <IconManager {...args} />;

export const Default = Template.bind({});
Default.args = {};
