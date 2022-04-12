import { ComponentMeta } from '@storybook/react';
import { templateForComponent } from '@utils/templateForComponent';
import { BaseTextarea } from './BaseTextarea';

export default {
    title: 'Atoms/BaseTextarea',
    component: BaseTextarea,
    argTypes: {
        isResize: { control: 'boolean' },
        placeholder: { control: 'text' },
    },
} as ComponentMeta<typeof BaseTextarea>;

const template = templateForComponent(BaseTextarea);

export const Default = template({})

Default.args = {
    placeholder: 'Textarea placeholder',
		isResize: true,
};
