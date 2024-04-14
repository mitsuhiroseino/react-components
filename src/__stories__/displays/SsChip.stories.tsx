import { Meta, StoryFn } from '@storybook/react';
import SsChip from '../../displays/SsChip';

export default {
  title: 'Displays/SsChip',
  component: SsChip,
  argTypes: {},
} satisfies Meta<typeof SsChip>;

const Template: StoryFn<typeof SsChip> = (args) => <SsChip {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
