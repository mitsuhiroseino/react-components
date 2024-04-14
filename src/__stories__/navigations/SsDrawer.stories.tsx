import { Meta, StoryFn } from '@storybook/react';
import SsDrawer from '../../navigations/SsDrawer';

export default {
  title: 'Navigations/SsDrawer',
  component: SsDrawer,
  argTypes: {},
} satisfies Meta<typeof SsDrawer>;

const Template: StoryFn<typeof SsDrawer> = (args) => <SsDrawer {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
