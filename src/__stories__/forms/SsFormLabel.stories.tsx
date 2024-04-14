import { Meta, StoryFn } from '@storybook/react';
import SsFormLabel from '../../forms/SsFormLabel';

export default {
  title: 'Forms/SsFormLabel',
  component: SsFormLabel,
  argTypes: {},
} satisfies Meta<typeof SsFormLabel>;

const Template: StoryFn<typeof SsFormLabel> = (args) => <SsFormLabel {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
