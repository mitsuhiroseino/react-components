import { Meta, StoryFn } from '@storybook/react';

import SsBlockNumber from '../../texts/SsBlockNumber';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/SsBlockNumber',
  component: SsBlockNumber,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SsBlockNumber>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsBlockNumber> = (args) => <SsBlockNumber {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 2023,
  animation: true,
};
