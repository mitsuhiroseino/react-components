import { Meta, StoryFn } from '@storybook/react';
import SsGrow from '../../animations/SsGrow';

export default {
  title: 'Animations/SsGrow',
  component: SsGrow,
  argTypes: {},
} satisfies Meta<typeof SsGrow>;

const Template: StoryFn<typeof SsGrow> = (args) => <SsGrow {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
