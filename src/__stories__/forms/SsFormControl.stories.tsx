import { Meta, StoryFn } from '@storybook/react';
import SsFormControl from '../../forms/SsFormControl';

export default {
  title: 'Forms/SsFormControl',
  component: SsFormControl,
  argTypes: {},
} satisfies Meta<typeof SsFormControl>;

const Template: StoryFn<typeof SsFormControl> = (args) => <SsFormControl {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
