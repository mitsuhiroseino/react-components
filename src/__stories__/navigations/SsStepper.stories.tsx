import { Meta, StoryFn } from '@storybook/react';
import SsStepper from '../../navigations/SsStepper';

export default {
  title: 'Navigations/SsStepper',
  component: SsStepper,
  argTypes: {},
} satisfies Meta<typeof SsStepper>;

const Template: StoryFn<typeof SsStepper> = (args) => <SsStepper {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
