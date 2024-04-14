import { Meta, StoryFn } from '@storybook/react';
import SsToggleButtonGroup from '../../buttons/SsToggleButtonGroup';

export default {
  title: 'Buttons/SsToggleButtonGroup',
  component: SsToggleButtonGroup,
  argTypes: {},
} satisfies Meta<typeof SsToggleButtonGroup>;

const Template: StoryFn<typeof SsToggleButtonGroup> = (args) => <SsToggleButtonGroup {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
