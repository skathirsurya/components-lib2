import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'components-lib2-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input()
  nav: any = [];

  @Input()
  theme: 'basic' | 'csbs' = 'basic';

  @Input()
  size: 'small' | 'medium' = 'medium';

  @Input()
  label = 'Nav Item';

  @Input()
  icon: string;

  @Input()
  showIcon = true;

  public get classNames(): string[] {
    return ['nav-item', `nav-item--${this.theme}`, `nav-item--${this.size}`];
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}
