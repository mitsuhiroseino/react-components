import { Meta, StoryFn } from '@storybook/react';
import SsStack from '../../layouts/SsStack';

export default {
  title: 'Layouts/SsStack',
  component: SsStack,
  argTypes: {},
} satisfies Meta<typeof SsStack>;

const Template: StoryFn<typeof SsStack> = (args) => <SsStack {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
