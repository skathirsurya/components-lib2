import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { NavLayoutComponent } from './nav-layout.component';

export default {
  title: 'Core/Atoms/Navigation Layout',
  component: NavLayoutComponent,
  argTypes: {
    theme: {
      options: ['basic', 'csbs'],
      control: { type: 'select' },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [NavItemComponent],
    }),
  ],
} as Meta<NavLayoutComponent>;

const Template: Story<NavLayoutComponent> = (args: NavLayoutComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  theme: 'basic',
  CompanyName: 'Company',
  navigations: [
    {
      size: 'medium',
      label: 'Dashboard',
    },
    {
      size: 'medium',
      label: 'Accounts',
    },
  ],
};
