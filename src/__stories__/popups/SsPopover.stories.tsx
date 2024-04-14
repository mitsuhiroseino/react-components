import { Meta, StoryFn } from '@storybook/react';
import SsPopover from '../../popups/SsPopover';

export default {
  title: 'Popups/SsPopover',
  component: SsPopover,
  argTypes: {},
} satisfies Meta<typeof SsPopover>;

const Template: StoryFn<typeof SsPopover> = (args) => <SsPopover {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
