import { Meta, StoryFn } from '@storybook/react';
import SsBox from '../../layouts/SsBox';

export default {
  title: 'Layouts/SsBox',
  component: SsBox,
  argTypes: {},
} satisfies Meta<typeof SsBox>;

const Template: StoryFn<typeof SsBox> = (args) => <SsBox {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
