import { ComponentMeta } from "@storybook/react";
import { templateForComponent } from "@utils/templateForComponent";
import { SidebarMenu } from './SidebarMenu'; 

export default {
	title: "Molecules/Sidebar",
	component: SidebarMenu,
	argTypes: {

	},
} as ComponentMeta<typeof SidebarMenu>;

const template = templateForComponent(SidebarMenu);

export const Default = template({})