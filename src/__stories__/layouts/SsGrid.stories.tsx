import { Meta, StoryFn } from '@storybook/react';
import SsGrid from '../../layouts/SsGrid';

export default {
  title: 'Layouts/SsGrid',
  component: SsGrid,
  argTypes: {},
} satisfies Meta<typeof SsGrid>;

const Template: StoryFn<typeof SsGrid> = (args) => <SsGrid {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
