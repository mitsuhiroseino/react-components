import { Meta, StoryFn } from '@storybook/react';
import SsPaper from '../../layouts/SsPaper';

export default {
  title: 'Layouts/SsPaper',
  component: SsPaper,
  argTypes: {},
} satisfies Meta<typeof SsPaper>;

const Template: StoryFn<typeof SsPaper> = (args) => <SsPaper {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
