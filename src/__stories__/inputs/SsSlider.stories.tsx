import { Meta, StoryFn } from '@storybook/react';
import SsSlider from '../../inputs/SsSlider';

export default {
  title: 'Inputs/SsSlider',
  component: SsSlider,
  argTypes: {},
} satisfies Meta<typeof SsSlider>;

const Template: StoryFn<typeof SsSlider> = (args) => <SsSlider {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
