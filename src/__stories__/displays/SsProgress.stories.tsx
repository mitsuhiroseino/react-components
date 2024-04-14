import { Meta, StoryFn } from '@storybook/react';

import SsProgress from '../../displays/SsProgress';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Progress/SsProgress',
  component: SsProgress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SsProgress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsProgress> = (args) => <SsProgress {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  value: 0.5,
  minValue: 0,
  maxValue: 1,
};
