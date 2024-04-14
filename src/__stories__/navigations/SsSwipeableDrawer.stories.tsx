import { Meta, StoryFn } from '@storybook/react';
import SsSwipeableDrawer from '../../navigations/SsSwipeableDrawer';

export default {
  title: 'Navigations/SsSwipeableDrawer',
  component: SsSwipeableDrawer,
  argTypes: {},
} satisfies Meta<typeof SsSwipeableDrawer>;

const Template: StoryFn<typeof SsSwipeableDrawer> = (args) => <SsSwipeableDrawer {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
