import { ComponentMeta } from "@storybook/react";
import { templateForComponent } from "@utils/templateForComponent";
import { HamburgerIcon } from "./HamburgerIcon";

export default {
  title: "Atoms/HamburgerIcon",
  component: HamburgerIcon,
  argTypes: {
    open: { control: "boolean", defaultValue: false },
  },
} as ComponentMeta<typeof HamburgerIcon>;

const template = templateForComponent(HamburgerIcon);

export const Default = template({});
