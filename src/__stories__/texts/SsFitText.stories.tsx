import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Meta, StoryFn } from '@storybook/react';

import SsFitText, { DISPLAY_TYPE, SCALING_TYPE } from '../../texts/SsFitText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/SsFitText',
  component: SsFitText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    displayType: { control: 'select', options: Object.values(DISPLAY_TYPE) },
    scalingType: { control: 'select', options: Object.values(SCALING_TYPE) },
    justifyContent: {
      control: 'select',
      options: [
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'left',
        'right',
        'normal',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch',
        'safe center',
        'unsafe center',
        'inherit',
        'initial',
        'revert',
        'unset',
      ],
    },
    alignItems: {
      control: 'select',
      options: [
        'normal',
        'stretch',
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'baseline',
        'first baseline',
        'last baseline',
        'safe center',
        'unsafe center',
        'inherit',
        'initial',
        'revert',
        'unset',
      ],
    },
  },
} satisfies Meta<typeof SsFitText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsFitText> = (args) => {
  return <SsFitText {...args} sx={{ flex: '1 1 auto', border: 'solid #999 1px' }} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'abcABC123あいう亜囲鵜',
  width: 200,
  height: 100,
  displayType: 'visible',
  scalingType: 'scale',
  maxWidth: '100%',
};

const FlexTemplate: StoryFn<typeof SsFitText> = (args) => (
  <Container maxWidth="sm" sx={{ border: 'solid #999 1px' }}>
    <SsFitText {...args} />
  </Container>
);
export const Flex = FlexTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Flex.args = {
  children: 'abcABC123あいう亜囲鵜',
  displayType: 'visible',
  scalingType: 'scale',
};

const OuterTemplate: StoryFn<typeof SsFitText> = (args) => {
  const { width, height, justifyContent, alignItems, ...rest } = args;
  return (
    <Box
      sx={{
        border: 'solid #999 1px',
        width,
        height,
        display: 'flex',
        flexDirection: 'row',
        justifyContent,
        alignItems,
      }}
    >
      <SsFitText {...rest} maxWidth="100%" maxHeight="100%" />
    </Box>
  );
};
export const Outer = OuterTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outer.args = {
  children: 'abcABC123あいう亜囲鵜',
  displayType: 'visible',
  scalingType: 'scale',
  width: 200,
  height: 100,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};
