import { Meta, StoryFn } from '@storybook/react';
import SsAppBar from '../../navigations/SsAppBar';

export default {
  title: 'Navigations/SsAppBar',
  component: SsAppBar,
  argTypes: {},
} satisfies Meta<typeof SsAppBar>;

const Template: StoryFn<typeof SsAppBar> = (args) => <SsAppBar {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
