import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ColorPicker from "./ColorPicker";

const meta: Meta<typeof ColorPicker> = {
  title: "UI/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const WithLabel: Story = {
  render: () => {
    const [color, setColor] = useState("#000000");
    return <ColorPicker label="Text color" value={color} onChange={setColor} />;
  },
};

export const WithoutLabel: Story = {
  render: () => {
    const [color, setColor] = useState("#ff6600");
    return <ColorPicker value={color} onChange={setColor} />;
  },
};
