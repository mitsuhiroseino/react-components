import { Meta, StoryFn } from '@storybook/react';
import SsPagination from '../../navigations/SsPagination';

export default {
  title: 'Navigations/SsPagination',
  component: SsPagination,
  argTypes: {},
} satisfies Meta<typeof SsPagination>;

const Template: StoryFn<typeof SsPagination> = (args) => <SsPagination {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
