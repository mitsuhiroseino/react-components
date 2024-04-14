import { Meta, StoryFn } from '@storybook/react';
import SsIconButton from '../../buttons/SsIconButton';

export default {
  title: 'Buttons/SsIconButton',
  component: SsIconButton,
  argTypes: {},
} satisfies Meta<typeof SsIconButton>;

const Template: StoryFn<typeof SsIconButton> = (args) => <SsIconButton {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
