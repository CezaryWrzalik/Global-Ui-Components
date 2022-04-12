import { ComponentMeta } from "@storybook/react";
import { templateForComponent } from "@utils/templateForComponent";
import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Click me",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "teritary"],
      defaultValue: "primary",
    },
    center: {
      control: "boolean",
      defaultValue: false,
    },
		fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
		disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

const template = templateForComponent(Button);

export const Default = template({});
