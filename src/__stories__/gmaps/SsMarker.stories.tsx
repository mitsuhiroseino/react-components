import { Meta, StoryFn } from '@storybook/react';

import SsGoogleMap from '../../gmaps/SsGoogleMap';
import SsMarker from '../../gmaps/SsMarker';
import { GOOGLE_MAPS_PROPS } from './constants';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Gmap/SsMarker',
  component: SsMarker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SsMarker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsMarker> = (args) => (
  <SsGoogleMap {...GOOGLE_MAPS_PROPS}>
    <SsMarker {...args} />
  </SsGoogleMap>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  lat: 35.68102299850607,
  lng: 139.76726854634921,
  position: undefined,
  positionAnimation: true,
  positionAnimationOptions: undefined,
  options: undefined,
  animation: 1,
  clickable: undefined,
  cursor: undefined,
  draggable: undefined,
  icon: undefined,
  label: undefined,
  opacity: undefined,
  shape: undefined,
  title: undefined,
  visible: undefined,
  zIndex: undefined,
  clusterer: undefined,
  noClustererRedraw: undefined,
};
