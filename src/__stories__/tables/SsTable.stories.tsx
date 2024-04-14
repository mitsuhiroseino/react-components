import { Meta, StoryFn } from '@storybook/react';
import SsTable from '../../tables/SsTable';

export default {
  title: 'Tables/SsTable',
  component: SsTable,
  argTypes: {},
} satisfies Meta<typeof SsTable>;

const Template: StoryFn<typeof SsTable> = (args) => <SsTable {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
