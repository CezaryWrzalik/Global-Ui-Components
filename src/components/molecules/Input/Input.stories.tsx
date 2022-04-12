import { InputProps } from "@@types/Inputs";
import { ComponentMeta } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Molecules/Input",
  component: Input,
  description: `DESC`,
  argTypes: {
    type: {
      control: "radio",
      defaultValue: "text",
      options: ["text", "email"],
    },
    error: { control: "boolean" },
    label: { control: "text" },
		errorMessage: {control: "text"},
  },
} as ComponentMeta<typeof Input>;

export const Default = (args: InputProps.Default) => <Input {...args} />;

Default.args = {};
