import { Meta, StoryFn } from '@storybook/react';
import SsTabs from '../../navigations/SsTabs';

export default {
  title: 'Navigations/SsTabs',
  component: SsTabs,
  argTypes: {},
} satisfies Meta<typeof SsTabs>;

const Template: StoryFn<typeof SsTabs> = (args) => <SsTabs {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
