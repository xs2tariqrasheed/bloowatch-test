import PriceTag from "./Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Input",
  component: PriceTag,
} as ComponentMeta<typeof PriceTag>;

const Template: ComponentStory<typeof PriceTag> = (args) => (
  <PriceTag {...args}>$150.00</PriceTag>
);

export const primary = Template.bind({});
primary.args = {
  label: 'Search',
  placeholder: 'Search for a product'
};
