import { Meta, StoryFn } from '@storybook/react';
import SsZoom from '../../animations/SsZoom';

export default {
  title: 'Animations/SsZoom',
  component: SsZoom,
  argTypes: {},
} satisfies Meta<typeof SsZoom>;

const Template: StoryFn<typeof SsZoom> = (args) => <SsZoom {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
