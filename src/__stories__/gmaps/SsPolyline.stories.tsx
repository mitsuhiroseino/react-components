import { Meta, StoryFn } from '@storybook/react';

import SsGoogleMap from '../../gmaps/SsGoogleMap';
import SsPolyline from '../../gmaps/SsPolyline';
import { GOOGLE_MAPS_PROPS } from './constants';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Gmap/SsPolyline',
  component: SsPolyline,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SsPolyline>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SsPolyline> = (args) => (
  <SsGoogleMap {...GOOGLE_MAPS_PROPS} center={{ lat: 35.6985742749286, lng: 139.77309348245896 }} zoom={12}>
    <SsPolyline {...args} />
  </SsGoogleMap>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  path: [
    { lat: 35.68102299850607, lng: 139.76726854634921 },
    { lat: 35.69207741049731, lng: 139.77089896743703 },
    { lat: 35.6985742749286, lng: 139.77309348245896 },
    { lat: 35.70776046237045, lng: 139.77485049282652 },
    { lat: 35.71429748644659, lng: 139.77737673682324 },
  ],
  pathAnimation: true,
  pathAnimationOptions: {
    duration: 3000,
    initialValue: [],
  },
  pathAnimationType: 'difference',
};
