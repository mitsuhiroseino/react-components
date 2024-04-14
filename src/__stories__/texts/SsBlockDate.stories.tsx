import { Meta, StoryFn } from '@storybook/react';

import SsBlockDate from '../../texts/SsBlockDate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/SsBlockDate',
  component: SsBlockDate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SsBlockDate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsBlockDate> = (args) => <SsBlockDate {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: new Date(2023, 0, 1),
  animation: true,
};
