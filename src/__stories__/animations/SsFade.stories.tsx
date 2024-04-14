import { Meta, StoryFn } from '@storybook/react';
import SsFade from '../../animations/SsFade';

export default {
  title: 'Animations/SsFade',
  component: SsFade,
  argTypes: {},
} satisfies Meta<typeof SsFade>;

const Template: StoryFn<typeof SsFade> = (args) => <SsFade {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
