import { Meta, StoryFn } from '@storybook/react';
import SsAvatarGroup from '../../displays/SsAvatarGroup';

export default {
  title: 'Displays/SsAvatarGroup',
  component: SsAvatarGroup,
  argTypes: {},
} satisfies Meta<typeof SsAvatarGroup>;

const Template: StoryFn<typeof SsAvatarGroup> = (args) => <SsAvatarGroup {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
