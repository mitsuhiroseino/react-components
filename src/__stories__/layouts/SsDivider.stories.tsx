import { Meta, StoryFn } from '@storybook/react';
import SsDivider from '../../layouts/SsDivider';

export default {
  title: 'Layouts/SsDivider',
  component: SsDivider,
  argTypes: {},
} satisfies Meta<typeof SsDivider>;

const Template: StoryFn<typeof SsDivider> = (args) => <SsDivider {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
