import { Meta, StoryFn } from '@storybook/react';

import SsBlockText, { DISPLAY_TYPE, HORIZONTAL_LAYOUT, SCALING_TYPE, VERTICAL_LAYOUT } from '../../texts/SsBlockText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/SsBlockText',
  component: SsBlockText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    displayType: { control: 'select', options: Object.values(DISPLAY_TYPE) },
    scalingType: { control: 'select', options: Object.values(SCALING_TYPE) },
    verticalLayoyt: { control: 'select', options: Object.values(VERTICAL_LAYOUT) },
    horizontalLayoyt: { control: 'select', options: Object.values(HORIZONTAL_LAYOUT) },
  },
} satisfies Meta<typeof SsBlockText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsBlockText> = (args) => {
  return <SsBlockText {...args} sx={{ border: 'solid #999 1px' }} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'abcABC123あいう亜囲鵜',
  width: 200,
  height: 100,
  displayType: 'visible',
  scalingType: 'scale',
  verticalLayoyt: 'top',
  horizontalLayoyt: 'left',
};
