import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavLayoutComponent } from './nav-layout.component';

export default {
  title: 'NavLayoutComponent',
  component: NavLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<NavLayoutComponent>;

const Template: Story<NavLayoutComponent> = (args: NavLayoutComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}