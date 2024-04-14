import { Meta, StoryFn } from '@storybook/react';
import SsPopper from '../../popups/SsPopper';

export default {
  title: 'Popups/SsPopper',
  component: SsPopper,
  argTypes: {},
} satisfies Meta<typeof SsPopper>;

const Template: StoryFn<typeof SsPopper> = (args) => <SsPopper {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
