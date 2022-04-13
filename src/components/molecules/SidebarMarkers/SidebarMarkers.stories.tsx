import { ComponentMeta } from "@storybook/react";
import { templateForComponent } from "@utils/templateForComponent";
import { SidebarMarkers } from './SidebarMarkers'; 

export default {
	title: "Molecules/SidebarMarkers",
	component: SidebarMarkers,
	argTypes: {

	},
} as ComponentMeta<typeof SidebarMarkers>;

const template = templateForComponent(SidebarMarkers);

export const Default = template({})