import { Meta, StoryFn } from '@storybook/react';
import SsHidden from '../../animations/SsHidden';

export default {
  title: 'Animations/SsHidden',
  component: SsHidden,
  argTypes: {},
} satisfies Meta<typeof SsHidden>;

const Template: StoryFn<typeof SsHidden> = (args) => <SsHidden {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
