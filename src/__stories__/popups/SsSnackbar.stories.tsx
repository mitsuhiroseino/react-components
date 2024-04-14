import { Meta, StoryFn } from '@storybook/react';
import SsSnackbar from '../../popups/SsSnackbar';

export default {
  title: 'Popups/SsSnackbar',
  component: SsSnackbar,
  argTypes: {},
} satisfies Meta<typeof SsSnackbar>;

const Template: StoryFn<typeof SsSnackbar> = (args) => <SsSnackbar {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
