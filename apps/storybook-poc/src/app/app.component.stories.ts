import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent,
  argTypes: {
    classNames: {
      options: ['red', 'green'],
      control: { type: 'select' },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<AppComponent>;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Hash8 Platform',
  classNames: 'red',
};
