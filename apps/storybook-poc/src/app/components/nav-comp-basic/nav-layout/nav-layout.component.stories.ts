import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { NavLayoutComponent } from './nav-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

export default {
  title: 'Base/Atoms/Navigation Layout',
  component: NavLayoutComponent,
  subcomponents: { NavItemComponent },
  argTypes: {
    theme: {
      options: ['basic', 'csbs'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    // sizeChange: { action: 'sizeisChanged' },
    navtouched: { action: 'navClicked' },
  },
  decorators: [
    moduleMetadata({
      declarations: [NavItemComponent],
      imports: [
        MatIconModule,
        FlexLayoutModule,
        MatButtonModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta<NavLayoutComponent>;

const Template: Story<NavLayoutComponent> = (args: NavLayoutComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  theme: 'basic',
  showIcon: true,
  CompanyName: 'Company',
  size: 'medium',
  navigations: [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      targetUrl: '/dashboard',
      apiUrl: '/v1/dashboard',
    },
    {
      label: 'Accounts',
      icon: 'account_box',
      targetUrl: '/accounts',
      apiUrl: '/v1/accounts',
    },
  ],
};
