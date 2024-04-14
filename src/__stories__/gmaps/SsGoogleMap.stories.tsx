import { Meta, StoryFn } from '@storybook/react';

import SsGoogleMap from '../../gmaps/SsGoogleMap';
import { GOOGLE_MAPS_PROPS } from './constants';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Gmap/SsGoogleMap',
  component: SsGoogleMap,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SsGoogleMap>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsGoogleMap> = (args) => <SsGoogleMap {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = GOOGLE_MAPS_PROPS;
