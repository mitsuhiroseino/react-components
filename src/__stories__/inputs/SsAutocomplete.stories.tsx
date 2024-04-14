import { Meta, StoryFn } from '@storybook/react';
import SsAutocomplete from '../../inputs/SsAutocomplete';

export default {
  title: 'Inputs/SsAutocomplete',
  component: SsAutocomplete,
  argTypes: {},
} satisfies Meta<typeof SsAutocomplete>;

const Template: StoryFn<typeof SsAutocomplete> = (args) => <SsAutocomplete {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
