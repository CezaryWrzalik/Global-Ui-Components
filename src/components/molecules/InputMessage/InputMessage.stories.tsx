import { ComponentMeta } from "@storybook/react";
import { templateForComponent } from "@utils/templateForComponent";
import { InputMessage } from "@molecules/InputMessage/InputMessage";

export default {
  title: "Molecules/InputMessage",
  component: InputMessage,
  argTypes: {
    children: { control: "text", defaultValue: "Input message" },
  },
} as ComponentMeta<typeof InputMessage>;

const template = templateForComponent(InputMessage);

export const Additional = template({});
