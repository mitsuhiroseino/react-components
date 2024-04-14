import { Meta, StoryFn } from '@storybook/react';
import SsAlert from '../../texts/SsAlert';

export default {
  title: 'Texts/SsAlert',
  component: SsAlert,
  argTypes: {},
} satisfies Meta<typeof SsAlert>;

const Template: StoryFn<typeof SsAlert> = (args) => <SsAlert {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
