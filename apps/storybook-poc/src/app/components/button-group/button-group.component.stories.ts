import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonGroupComponent } from './button-group.component';

export default {
  title: 'Base/Atoms/Button Group',
  component: ButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ButtonGroupComponent>;

const Template: Story<ButtonGroupComponent> = (args: ButtonGroupComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
