import { Meta, StoryFn } from '@storybook/react';

import SsTime from '../../texts/SsTime';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/SsTime',
  component: SsTime,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SsTime>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsTime> = (args) => <SsTime {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const Variant = Template.bind({});
Variant.args = { variant: 'h1' };

export const Color = Template.bind({});
Color.args = { color: 'Highlight' };

export const FontFamily = Template.bind({});
FontFamily.args = { fontFamily: 'Meiryo' };

export const Format = Template.bind({});
Format.args = { format: 'yyyy-MM-dd HH:mm:ss.SSS' };

export const _10Sec = Template.bind({});
_10Sec.args = {
  renderingTimingOptions: {
    executionCount: 10,
  },
};
