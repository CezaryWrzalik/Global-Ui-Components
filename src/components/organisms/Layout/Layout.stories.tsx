import { ComponentMeta } from "@storybook/react";
import { templateForComponent } from "@utils/templateForComponent";
import { Layout } from './Layout'; 

export default {
	title: "Organisms/Layout",
	component: Layout,
	argTypes: {

	},
} as ComponentMeta<typeof Layout>;

const template = templateForComponent(Layout);

export const Default = template({})