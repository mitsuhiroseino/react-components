import { Meta, StoryFn } from '@storybook/react';
import SsButton from '../../buttons/SsButton';

export default {
  title: 'Buttons/SsButton',
  component: SsButton,
  argTypes: {},
} satisfies Meta<typeof SsButton>;

const Template: StoryFn<typeof SsButton> = (args) => <SsButton {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
