import { Meta, StoryFn } from '@storybook/react';
import SsImageList from '../../lists/SsImageList';

export default {
  title: 'Lists/SsImageList',
  component: SsImageList,
  argTypes: {},
} satisfies Meta<typeof SsImageList>;

const Template: StoryFn<typeof SsImageList> = (args) => <SsImageList {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
