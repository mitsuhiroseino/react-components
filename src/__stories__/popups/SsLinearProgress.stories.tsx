import { Meta, StoryFn } from '@storybook/react';
import SsLinearProgress from '../../popups/SsLinearProgress';

export default {
  title: 'Popups/SsLinearProgress',
  component: SsLinearProgress,
  argTypes: {},
} satisfies Meta<typeof SsLinearProgress>;

const Template: StoryFn<typeof SsLinearProgress> = (args) => <SsLinearProgress {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
