import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'components-lib2-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  /**
   * What theme to use?
   */
  @Input()
  theme: 'basic' | 'csbs' = 'basic';

  /**
   * How large the nav item should be?
   */
  @Input()
  size: 'small' | 'medium' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Nav Item';

  public get classNames(): string[] {
    return ['nav-item', `nav-item--${this.theme}`, `nav-item--${this.size}`];
  }

  constructor() {}

  ngOnInit(): void {}
}
