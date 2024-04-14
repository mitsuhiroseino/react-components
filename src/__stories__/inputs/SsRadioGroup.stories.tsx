import { Meta, StoryFn } from '@storybook/react';
import SsRadioGroup from '../../inputs/SsRadioGroup';

export default {
  title: 'Inputs/SsRadioGroup',
  component: SsRadioGroup,
  argTypes: {},
} satisfies Meta<typeof SsRadioGroup>;

const Template: StoryFn<typeof SsRadioGroup> = (args) => <SsRadioGroup {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
