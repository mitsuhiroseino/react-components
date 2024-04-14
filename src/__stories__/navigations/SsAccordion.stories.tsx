import { Meta, StoryFn } from '@storybook/react';
import SsAccordion from '../../navigations/SsAccordion';

export default {
  title: 'Navigations/SsAccordion',
  component: SsAccordion,
  argTypes: {},
} satisfies Meta<typeof SsAccordion>;

const Template: StoryFn<typeof SsAccordion> = (args) => <SsAccordion {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
