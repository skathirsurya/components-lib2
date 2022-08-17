import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'hash8-platform-nav-layout',
  templateUrl: './nav-layout.component.html',
  styleUrls: ['./nav-layout.component.scss'],
})
export class NavLayoutComponent implements OnInit {
  @Input()
  CompanyName = 'Company';

  @Input()
  theme: 'basic' | 'csbs' = 'basic';

  @Input()
  size: 'small' | 'medium' = 'medium';

  @Input()
  showIcon = true;

  @Input()
  navigations = [
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
  ];

  @Output()
  sizeChange = new EventEmitter<string>();

  @Output()
  navtouched = new EventEmitter();

  public get classNames(): string[] {
    return [
      'nav-layout',
      `nav-layout--${this.theme}`,
      `nav-layout--${this.size}`,
    ];
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {
    // this.sizeChange.emit(this.size);
  }
}
