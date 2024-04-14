import { Meta, StoryFn } from '@storybook/react';
import SsAvatar from '../../displays/SsAvatar';

export default {
  title: 'Displays/SsAvatar',
  component: SsAvatar,
  argTypes: {},
} satisfies Meta<typeof SsAvatar>;

const Template: StoryFn<typeof SsAvatar> = (args) => <SsAvatar {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
