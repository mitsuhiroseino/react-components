import { Meta, StoryFn } from '@storybook/react';
import SsToolbar from '../../navigations/SsToolbar';

export default {
  title: 'Navigations/SsToolbar',
  component: SsToolbar,
  argTypes: {},
} satisfies Meta<typeof SsToolbar>;

const Template: StoryFn<typeof SsToolbar> = (args) => <SsToolbar {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
