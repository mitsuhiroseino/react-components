import { Meta, StoryFn } from '@storybook/react';
import SsCollapse from '../../animations/SsCollapse';

export default {
  title: 'Animations/SsCollapse',
  component: SsCollapse,
  argTypes: {},
} satisfies Meta<typeof SsCollapse>;

const Template: StoryFn<typeof SsCollapse> = (args) => <SsCollapse {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
