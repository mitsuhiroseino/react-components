import { Meta, StoryFn } from '@storybook/react';
import SsSkeleton from '../../layouts/SsSkeleton';

export default {
  title: 'Layouts/SsSkeleton',
  component: SsSkeleton,
  argTypes: {},
} satisfies Meta<typeof SsSkeleton>;

const Template: StoryFn<typeof SsSkeleton> = (args) => <SsSkeleton {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
