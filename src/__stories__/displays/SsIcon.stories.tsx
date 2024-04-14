import { Meta, StoryFn } from '@storybook/react';
import SsIcon from '../../displays/SsIcon';

export default {
  title: 'Displays/SsIcon',
  component: SsIcon,
  argTypes: {},
} satisfies Meta<typeof SsIcon>;

const Template: StoryFn<typeof SsIcon> = (args) => <SsIcon {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
