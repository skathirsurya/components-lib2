import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'components-lib2-nav-layout',
  templateUrl: './nav-layout.component.html',
  styleUrls: ['./nav-layout.component.scss'],
})
export class NavLayoutComponent implements OnInit {
  @Input()
  CompanyName = 'Company';

  @Input()
  theme: 'basic' | 'csbs' = 'basic';

  @Input()
  navigations = [
    {
      size: 'medium',
      label: 'Dashboard',
      icon: 'menu',
      urlPath: '/dashboard',
    },
    {
      size: 'medium',
      label: 'Accounts',
      icon: 'account_box',
    },
  ];

  public get classNames(): string[] {
    return ['nav-layout', `nav-layout--${this.theme}`];
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}
