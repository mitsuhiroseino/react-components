import { Meta, StoryFn } from '@storybook/react';
import SsBreadcrumbs from '../../navigations/SsBreadcrumbs';

export default {
  title: 'Navigations/SsBreadcrumbs',
  component: SsBreadcrumbs,
  argTypes: {},
} satisfies Meta<typeof SsBreadcrumbs>;

const Template: StoryFn<typeof SsBreadcrumbs> = (args) => <SsBreadcrumbs {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
