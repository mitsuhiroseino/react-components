import { Meta, StoryFn } from '@storybook/react';
import SsBadge from '../../displays/SsBadge';

export default {
  title: 'Displays/SsBadge',
  component: SsBadge,
  argTypes: {},
} satisfies Meta<typeof SsBadge>;

const Template: StoryFn<typeof SsBadge> = (args) => <SsBadge {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
