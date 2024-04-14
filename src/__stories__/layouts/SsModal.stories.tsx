import { Meta, StoryFn } from '@storybook/react';
import SsModal from '../../layouts/SsModal';

export default {
  title: 'Layouts/SsModal',
  component: SsModal,
  argTypes: {},
} satisfies Meta<typeof SsModal>;

const Template: StoryFn<typeof SsModal> = (args) => <SsModal {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
