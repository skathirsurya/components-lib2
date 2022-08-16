import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavItemComponent } from './nav-item.component';

export default {
  title: 'Core/Atoms/Navigation Item',
  component: NavItemComponent,
  argTypes: {
    theme: {
      options: ['basic', 'csbs'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<NavItemComponent>;

const Template: Story<NavItemComponent> = (args: NavItemComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  theme: 'basic',
  label: 'Nav Item',
  size: 'medium',
};

// export const CSBS = Template.bind({});
// CSBS.args = {
//   theme: 'csbs',
//   label: 'Nav Item',
// };

// export const Medium = Template.bind({});
// Medium.args = {
//   label: 'Nav Item',
//   size: 'medium',
// };

// export const Small = Template.bind({});
// Small.args = {
//   label: 'Nav Item',
//   size: 'small',
// };
