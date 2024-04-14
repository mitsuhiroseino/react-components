import { Meta, StoryFn } from '@storybook/react';
import SsMobileStepper from '../../navigations/SsMobileStepper';

export default {
  title: 'Navigations/SsMobileStepper',
  component: SsMobileStepper,
  argTypes: {},
} satisfies Meta<typeof SsMobileStepper>;

const Template: StoryFn<typeof SsMobileStepper> = (args) => <SsMobileStepper {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
