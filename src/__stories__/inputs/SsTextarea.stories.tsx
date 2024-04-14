import Box from '@mui/material/Box';
import { Meta, StoryFn } from '@storybook/react';

import SsTextField from '../../inputs/SsTextField';
import SsTextarea from '../../inputs/SsTextarea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input/SsTextarea',
  component: SsTextarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SsTextarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsTextarea> = (args) => <SsTextarea {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'SsTextarea',
};

const WrapedTemplate: StoryFn<typeof SsTextarea> = (args) => (
  <Box
    sx={{
      minHeight: 200,
      minWidth: 'calc(100vw - 2rem)',
      maxHeight: 200,
      maxWidth: 'calc(100vw - 2rem)',
      display: 'flex',
      justifyContent: 'stretch',
      alignItems: 'stretch',
    }}
  >
    <SsTextarea {...args} sx={{ flex: '1 1 auto' }} />
    <SsTextField label="text field" />
  </Box>
);

export const Secondary = WrapedTemplate.bind({});
Secondary.args = {
  label: 'SsTextarea',
  value: '123',
};

export const Large = Template.bind({});
Large.args = {
  value: 'large',
  label: 'SsTextarea',
};

export const Small = Template.bind({});
Small.args = {
  value: 'small',
  label: 'SsTextarea',
};
