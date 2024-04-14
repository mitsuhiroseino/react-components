import { Meta, StoryFn } from '@storybook/react';
import SsButtonGroup from '../../buttons/SsButtonGroup';

export default {
  title: 'Buttons/SsButtonGroup',
  component: SsButtonGroup,
  argTypes: {},
} satisfies Meta<typeof SsButtonGroup>;

const Template: StoryFn<typeof SsButtonGroup> = (args) => <SsButtonGroup {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
