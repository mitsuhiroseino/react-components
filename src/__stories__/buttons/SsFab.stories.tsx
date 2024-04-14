import { Meta, StoryFn } from '@storybook/react';
import SsFab from '../../buttons/SsFab';

export default {
  title: 'Buttons/SsFab',
  component: SsFab,
  argTypes: {},
} satisfies Meta<typeof SsFab>;

const Template: StoryFn<typeof SsFab> = (args) => <SsFab {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
