import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavItemComponent } from './nav-item.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Routes, RouterModule } from '@angular/router';

export default {
  title: 'Base/Atoms/Navigation Item',
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
    showIcon: {
      options: ['true', 'false'],
      control: { type: 'boolean' },
    },
    navClicked: { action: 'navClicked' },
  },
  decorators: [
    moduleMetadata({
      imports: [
        MatIconModule,
        FlexLayoutModule,
        MatButtonModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
      ],
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
  icon: 'menu',
  showIcon: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  theme: 'basic',
  label: 'Nav Item',
  size: 'medium',
  icon: 'menu',
  showIcon: true,
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
