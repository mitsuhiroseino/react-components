import { Meta, StoryFn } from '@storybook/react';
import SsBackdrop from '../../popups/SsBackdrop';

export default {
  title: 'Popups/SsBackdrop',
  component: SsBackdrop,
  argTypes: {},
} satisfies Meta<typeof SsBackdrop>;

const Template: StoryFn<typeof SsBackdrop> = (args) => <SsBackdrop {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
