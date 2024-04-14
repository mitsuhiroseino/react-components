import { Meta, StoryFn } from '@storybook/react';
import SsRadio from '../../inputs/SsRadio';

export default {
  title: 'Inputs/SsRadio',
  component: SsRadio,
  argTypes: {},
} satisfies Meta<typeof SsRadio>;

const Template: StoryFn<typeof SsRadio> = (args) => <SsRadio {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
