import { Meta, StoryFn } from '@storybook/react';
import SsFormGroup from '../../forms/SsFormGroup';

export default {
  title: 'Forms/SsFormGroup',
  component: SsFormGroup,
  argTypes: {},
} satisfies Meta<typeof SsFormGroup>;

const Template: StoryFn<typeof SsFormGroup> = (args) => <SsFormGroup {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
