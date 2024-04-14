import { Meta, StoryFn } from '@storybook/react';
import SsRating from '../../inputs/SsRating';

export default {
  title: 'Inputs/SsRating',
  component: SsRating,
  argTypes: {},
} satisfies Meta<typeof SsRating>;

const Template: StoryFn<typeof SsRating> = (args) => <SsRating {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
