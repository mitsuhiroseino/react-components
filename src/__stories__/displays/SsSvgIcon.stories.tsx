import { Meta, StoryFn } from '@storybook/react';
import SsSvgIcon from '../../displays/SsSvgIcon';

export default {
  title: 'Displays/SsSvgIcon',
  component: SsSvgIcon,
  argTypes: {},
} satisfies Meta<typeof SsSvgIcon>;

const Template: StoryFn<typeof SsSvgIcon> = (args) => <SsSvgIcon {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
