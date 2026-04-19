import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./Button";

import { fn } from "storybook/test";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonVariant: "primary",
    label: "Download",
  },
  play: async function ({ canvas, userEvent }) {
    const button = canvas.getByRole("button", { name: /Download/i });

    // 👇 Simulate behavior
    await userEvent.click(button);
  },
};

export const Secondary: Story = {
  args: {
    buttonVariant: "secondary",
    label: "Download",
  },
};
