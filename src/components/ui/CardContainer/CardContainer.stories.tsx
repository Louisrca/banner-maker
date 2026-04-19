import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react-vite";

import CardContainer from "./CardContainer";
import Button from "@UI/Button/Button";

const meta = {
  title: "UI/CardContainer",
  component: CardContainer,
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof CardContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <p>Card Container</p>
        <Button buttonVariant="primary" label="Download" onClick={fn()} />
      </>
    ),
  },
};

export const WithOverflowEnabled: Story = {
  args: {
    children: (
      <>
        <p>Card Container</p>
        {Array.from({ length: 15 }, (_, index) => (
          <Button
            key={index}
            buttonVariant="primary"
            label={`Download ${index + 1}`}
            onClick={fn()}
          />
        ))}
      </>
    ),
    isOverflow: true,
  },
};
