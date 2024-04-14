import { Meta, StoryFn } from '@storybook/react';
import SsSwitch from '../../inputs/SsSwitch';

export default {
  title: 'Inputs/SsSwitch',
  component: SsSwitch,
  argTypes: {},
} satisfies Meta<typeof SsSwitch>;

const Template: StoryFn<typeof SsSwitch> = (args) => <SsSwitch {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
