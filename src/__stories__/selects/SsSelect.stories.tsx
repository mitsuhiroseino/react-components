import { Meta, StoryFn } from '@storybook/react';
import SsSelect from '../../selects/SsSelect';

export default {
  title: 'Selects/SsSelect',
  component: SsSelect,
  argTypes: {},
} satisfies Meta<typeof SsSelect>;

const Template: StoryFn<typeof SsSelect> = (args) => <SsSelect {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
