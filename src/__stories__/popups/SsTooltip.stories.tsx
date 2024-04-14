import { Meta, StoryFn } from '@storybook/react';
import SsTooltip from '../../popups/SsTooltip';

export default {
  title: 'Popups/SsTooltip',
  component: SsTooltip,
  argTypes: {},
} satisfies Meta<typeof SsTooltip>;

const Template: StoryFn<typeof SsTooltip> = (args) => <SsTooltip {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
