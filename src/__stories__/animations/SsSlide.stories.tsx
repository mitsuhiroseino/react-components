import { Meta, StoryFn } from '@storybook/react';
import SsSlide from '../../animations/SsSlide';

export default {
  title: 'Animations/SsSlide',
  component: SsSlide,
  argTypes: {},
} satisfies Meta<typeof SsSlide>;

const Template: StoryFn<typeof SsSlide> = (args) => <SsSlide {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
