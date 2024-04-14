import { Meta, StoryFn } from '@storybook/react';
import SsMenu from '../../menus/SsMenu';

export default {
  title: 'Menus/SsMenu',
  component: SsMenu,
  argTypes: {},
} satisfies Meta<typeof SsMenu>;

const Template: StoryFn<typeof SsMenu> = (args) => <SsMenu {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
