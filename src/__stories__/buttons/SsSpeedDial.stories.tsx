import { Meta, StoryFn } from '@storybook/react';
import SsSpeedDial from '../../buttons/SsSpeedDial';

export default {
  title: 'Buttons/SsSpeedDial',
  component: SsSpeedDial,
  argTypes: {},
} satisfies Meta<typeof SsSpeedDial>;

const Template: StoryFn<typeof SsSpeedDial> = (args) => <SsSpeedDial {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
