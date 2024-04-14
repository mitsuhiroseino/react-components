import { Meta, StoryFn } from '@storybook/react';
import SsCircularProgress from '../../popups/SsCircularProgress';

export default {
  title: 'Popups/SsCircularProgress',
  component: SsCircularProgress,
  argTypes: {},
} satisfies Meta<typeof SsCircularProgress>;

const Template: StoryFn<typeof SsCircularProgress> = (args) => <SsCircularProgress {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
