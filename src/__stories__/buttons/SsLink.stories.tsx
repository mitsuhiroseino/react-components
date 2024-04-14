import { Meta, StoryFn } from '@storybook/react';
import SsLink from '../../buttons/SsLink';

export default {
  title: 'Buttons/SsLink',
  component: SsLink,
  argTypes: {},
} satisfies Meta<typeof SsLink>;

const Template: StoryFn<typeof SsLink> = (args) => <SsLink {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
