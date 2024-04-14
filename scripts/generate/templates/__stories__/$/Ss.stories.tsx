import { Meta, StoryFn } from '@storybook/react';
import Ss{{uppercamelcase}} from '../../{{category}}/Ss{{uppercamelcase}}';

export default {
  title: '{{capitalizedcategory}}/Ss{{uppercamelcase}}',
  component: Ss{{uppercamelcase}},
  argTypes: {},
} satisfies Meta<typeof Ss{{uppercamelcase}}>;

const Template: StoryFn<typeof Ss{{uppercamelcase}}> = (args) => <Ss{{uppercamelcase}} {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Complex = Template.bind({});
Complex.args = {};
