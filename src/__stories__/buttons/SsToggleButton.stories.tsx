import { Meta, StoryFn } from '@storybook/react';
import SsToggleButton from '../../buttons/SsToggleButton';

export default {
  title: 'Buttons/SsToggleButton',
  component: SsToggleButton,
  argTypes: {},
} satisfies Meta<typeof SsToggleButton>;

const Template: StoryFn<typeof SsToggleButton> = (args) => <SsToggleButton {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
