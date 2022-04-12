import { ComponentMeta } from "@storybook/react";
import { templateForComponent } from "@utils/templateForComponent";
import { BaseInput } from "./BaseInput";

export default {
  title: "Atoms/BaseInput",
  component: BaseInput,
  argTypes: {
    placeholder: {
      control: "text",
      defaultValue: "Placeholder",
    },
    type: {
      control: "radio",
      options: ["text", "email"],
    },
    error: { control: "boolean", defaultValue: false },
  },
} as ComponentMeta<typeof BaseInput>;

const template = templateForComponent(BaseInput);

export const Default = template({});
