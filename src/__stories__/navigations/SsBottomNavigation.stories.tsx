import { Meta, StoryFn } from '@storybook/react';
import SsBottomNavigation from '../../navigations/SsBottomNavigation';

export default {
  title: 'Navigations/SsBottomNavigation',
  component: SsBottomNavigation,
  argTypes: {},
} satisfies Meta<typeof SsBottomNavigation>;

const Template: StoryFn<typeof SsBottomNavigation> = (args) => <SsBottomNavigation {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
