import { Meta, StoryFn } from '@storybook/react';
import SsNativeSelect from '../../selects/SsNativeSelect';

export default {
  title: 'Selects/SsNativeSelect',
  component: SsNativeSelect,
  argTypes: {},
} satisfies Meta<typeof SsNativeSelect>;

const Template: StoryFn<typeof SsNativeSelect> = (args) => <SsNativeSelect {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
