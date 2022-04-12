import { ComponentMeta } from "@storybook/react";
import { Textarea, TextareaProps } from "./Textarea";

export default {
  title: "Molecules/Textarea",
  component: Textarea,
  description: `DESC`,
  argTypes: {
    label: { control: "text" },
  },
} as ComponentMeta<typeof Textarea>;

export const Default = (args: TextareaProps) => <Textarea {...args} />;

Default.args = {
  placeholder: "Textarea placeholder",
};
