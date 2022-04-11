import { ComponentMeta } from '@storybook/react';
import { Label } from './Label';
import { templateForComponent } from '@utils/templateForComponent';

export default {
    title: 'Atoms/Label',
    component: Label,
    argTypes: {
        children: { control: 'text', defaultValue: 'Label text' },
    },
} as ComponentMeta<typeof Label>;

const template = templateForComponent(Label);

export const Default = template({});
