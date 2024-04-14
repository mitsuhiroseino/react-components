import { Meta, StoryFn } from '@storybook/react';
import SsFormHelperText from '../../forms/SsFormHelperText';

export default {
  title: 'Forms/SsFormHelperText',
  component: SsFormHelperText,
  argTypes: {},
} satisfies Meta<typeof SsFormHelperText>;

const Template: StoryFn<typeof SsFormHelperText> = (args) => <SsFormHelperText {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
