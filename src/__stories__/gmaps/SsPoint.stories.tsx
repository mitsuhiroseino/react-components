import { Meta, StoryFn } from '@storybook/react';

import SsGoogleMap from '../../gmaps/SsGoogleMap';
import SsPoint from '../../gmaps/SsPoint';
import { GOOGLE_MAPS_PROPS } from './constants';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Gmap/SsPoint',
  component: SsPoint,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SsPoint>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsPoint> = (args) => (
  <SsGoogleMap {...GOOGLE_MAPS_PROPS}>
    <SsPoint {...args} />
  </SsGoogleMap>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  lat: 35.68102299850607,
  lng: 139.76726854634921,
  positionAnimation: true,
  positionAnimationOptions: undefined,
  iconAnimation: true,
  iconAnimationOptions: undefined,
};
