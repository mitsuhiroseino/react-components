import { Meta, StoryFn } from '@storybook/react';

import SsTextField from '../../inputs/SsTextField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input/SsTextField',
  component: SsTextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SsTextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsTextField> = (args) => <SsTextField {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'SsTextField',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'SsTextField',
  semicircle: true,
};

export const Large = Template.bind({});
Large.args = {
  value: 'large',
  label: 'SsTextField',
};

export const Null = Template.bind({});
Null.args = {
  value: null,
  label: 'SsTextField',
  onChange: (event) => {
    console.log('onChange', JSON.stringify(event.target.value));
  },
  onBlur: (event) => {
    console.log('onBlur', JSON.stringify(event.target.value));
  },
};
