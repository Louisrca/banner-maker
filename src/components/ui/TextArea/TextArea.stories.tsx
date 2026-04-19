import type { Meta, StoryObj } from "@storybook/react-vite";
import TextArea from "./TextArea";

const meta = {
  title: "UI/TextArea",
  component: TextArea,
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mainText: "",
    setMainText: () => {},
  },
};
